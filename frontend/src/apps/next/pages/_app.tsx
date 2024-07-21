import 'raf/polyfill'
import 'setimmediate'

import Head from 'next/head'
import React from 'react'

import "@fortawesome/fontawesome-free/css/all.min.css";   
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";  
import "@/css/satoshi.css";
import "@/css/style.css";  

import { AppProps } from 'next/app'
import { Layout } from 'app/layout'

import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

import { QueryClient, QueryClientProvider } from "react-query";   
import ErrorPage from "next/error"; 
import { getStrapiURL } from "../utils";
import { getLocalizedParams } from "../utils/localize";   
import App from "next/app";  

import DefaultLayout from "@/components/Layouts/DefaultLayout"; 
import { useRouter } from 'next/router' 

const queryClient = new QueryClient();  

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }  
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Knowledge development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />       
        <meta name="description" content="FastMDM" />
        <meta name="yandex-verification" content="72d313b1cd546257" />
        <meta name="google-site-verification" content="r5O1dfe5Y-uQNuVVaS2307HvMKf5EsGk7Aw3bkXSQ8M" />
        <link rel="icon" href="/fastmdm.ico" />

      </Head>
      <DefaultLayout>
        <QueryClientProvider client={queryClient}>   
          <Component {...pageProps} key={router.asPath}  />
        </QueryClientProvider>  
      </DefaultLayout>
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

