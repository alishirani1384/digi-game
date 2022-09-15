import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";
import "keen-slider/keen-slider.min.css";
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import Loading from "../components/Loading";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string) => {
      
      if(url!==router.asPath||url!==`/fa-IR`||url!==`/fa-IR/${router.asPath}`) return setLoading(true)
      // return url !== router.asPath && setLoading(true)
    }
    const handleComplete = (url: string) => {
      if (
        url === router.asPath ||
        url === `/fa-IR` ||
        url === `/fa-IR${router.asPath}`
      )
        return setLoading(false);
      // return url===router.asPath && setLoading(false) 
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete',handleComplete)
    router.events.on('routeChangeError', handleComplete)
    
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Digi-games</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}>
        <Layout>
          {loading&&<Loading/>}
            <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default MyApp;
