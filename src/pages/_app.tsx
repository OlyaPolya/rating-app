import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


