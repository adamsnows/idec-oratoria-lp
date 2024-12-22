import Head from "next/head";
import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {
  return (
    <Head>
      <meta name="author" content="Pronttus" />
      <meta name="keywords" content="Javascript" />
      <link rel="fluid-icon" href="/favicon.png" title="Pronttus" />
      <link rel="icon" type="svg+xml" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>IDEC • Formação em oratória</title>
      <link rel="shortcut icon" href="/favicon.png" type="x-icon" />
      <link rel="icon" href="/favicon32x32.png" sizes="32x32" />
      <link rel="icon" href="/favicon48x48.png" sizes="48x48" />
      <link rel="icon" href="/favicon96x96.png" sizes="96x96" />
      <link rel="icon" href="/favicon144x144.png" sizes="144x144" />
      <link rel="icon" href="/favicon512x512.png" sizes="512x512" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Pronttus" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://pronttus.com.br/" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image" content="/pronttus.png" />
      <meta name="twitter:title" content="Pronttus" />
      {/* <meta name="twitter:site" content="@vagnermengali" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/pronttus.png" />
      <meta name="twitter:description" content={description} />
      <meta property="al:ios:app_name" content="Pronttus" />
      <meta property="al:ios:url" content="https://pronttus.com.br/" />
      <meta property="al:android:app_name" content="Pronttus" />
      <meta property="al:android:url" content="https://pronttus.com.br/" />
      <link rel="canonical" href="https://pronttus.com.br/" />
      <meta name="theme-color" content="#0b0d0c" />
      <meta name="msapplication-TileColor" content="#0b0d0c" />
      <meta name="msapplication-navbutton-color" content="#0b0d0c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0b0d0c" />
      <link rel="manifest" href={"/manifest.webmanifest"} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};

export default Seo;
