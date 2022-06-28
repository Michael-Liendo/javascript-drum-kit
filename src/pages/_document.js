import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Drum Kit" />

        <meta
          property="og:description"
          content="This app is develop by Michael Liendo https://michaelliendo.com"
        />
        <meta name="theme-color" content="#3bd6cf" />

        <meta property="og:site_name" content="Michael Liendo" />

        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="michael liendo, liendo, michael, michaelliendo, michael liendo portafolio, michael liendo website, michael liendo developer, michael liendo portfolio, michael liendo portafolio, michael liendo biography, michael liendo biografia, liendo michael, who is michael liendo?, ¿quien es michael liendo?, publicaciones michael liendo, posts michael liendo"
        />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />
      </Head>
      <body className="bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
