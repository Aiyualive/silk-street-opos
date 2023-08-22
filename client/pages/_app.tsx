import '../src/styles/globals.scss';
import React from "react";
import type { AppProps } from 'next/app';
import {Toaster} from "react-hot-toast";
import {CustomThemeProvider} from "../src/providers/CustomThemeProvider";
import createEmotionCache from "../src/assets/createEmotionCache";
import { EmotionCache} from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import {BrandJsonLd, DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";
import * as font from "../src/assets/fonts";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

// _app runs on both client and server
function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CustomThemeProvider cache={emotionCache}>
            {/* SEO */}
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <DefaultSeo {...SEO} />
            <BrandJsonLd
                slogan="Get Blessed!"
                id="https://blessedburgers.co/"
                logo="https://www.blessedburgers.co/logos/normallogo.png"
            />

            {/* Vercel */}
            <Analytics />

            {/* Toaster is the very first div*/}
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 5000,
                    style: {background: "#FFDDA8"},
                    iconTheme: {primary: "#F0544F", secondary: "#FFDDA8"}
                }}
            />

            {/* Ensures proper initial font loading */}
            <div className={`${font.BasteleurBold.className} ${font.SatoshiBold.className} ${font.SatoshiMedium.className}`}>
                {process.env.NODE_ENV === "production" ?
                    <Component {...pageProps}/>
                    :
                    <React.StrictMode>
                        <Component {...pageProps}/>
                    </React.StrictMode>
                }
            </div>
        </CustomThemeProvider>

    );
}

export default App;
