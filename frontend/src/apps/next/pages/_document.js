// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import { AppRegistry } from 'react-native'
import i18nextConfig from '../next-i18next.config'



export async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent('Main', () => Main)
  const { getStyleElement } = AppRegistry.getApplication('Main')
  const page = await renderPage()
  return { ...page}
}

export class Document extends NextDocument{
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
 
          {/* Start cookiepal banner */}
          <script id="cookiepal" type="text/javascript" src="https://cdn.cookiepal.io/client_data/7b7b3eda-7ba3-4a6a-a4ed-63780c5e7eef/script.js"></script> 
          {/* End cookiepal banner */}

          <meta charSet="utf-8" />
        </Head>
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">

            <Main />
            <NextScript />
            {/* Yandex metrics */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
                  ym(96856602, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                  });
                `,
              }}
            />
            <noscript>
              <div>
                <img src="https://mc.yandex.ru/watch/96856602" style={{ position:'absolute', left:'-9999px' }} alt="" />
              </div>
            </noscript>  
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-E26ZRVL06C" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E26ZRVL06C', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />   
          </div>      
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = getInitialProps

export default Document
