import 'raf/polyfill'
import 'setimmediate'

import Head from 'next/head'
import React from 'react'

import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/global.css'
//import '../styles/index.css'
//import "../styles/tailwind.css";

import { AppProps } from 'next/app'
import { Layout } from 'app/layout'

import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

import { QueryClient, QueryClientProvider } from "react-query";   
import ErrorPage from "next/error"; 
import { getStrapiURL } from "../utils";
import { getLocalizedParams } from "../utils/localize";   
import App from "next/app";  
const queryClient = new QueryClient();  

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }  

  return (
    <>
      <Head>
        <title>Knowledge development</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />       
        <meta
          name="description"
          content="FastMDM"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <QueryClientProvider client={queryClient}>   
          <Component {...pageProps} />
        </QueryClientProvider>  
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {

  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch(
      getStrapiURL(
        `/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*&locale=${locale}`
      )
    );
    
    const globalData = await res.json();
    const globalDataAttributes = globalData.data.attributes;

    return { ...appProps, pageProps: { global: globalDataAttributes } };
  } catch (error) {
    return { ...appProps };
  }
  
};  

export default appWithTranslation(MyApp , nextI18NextConfig )

