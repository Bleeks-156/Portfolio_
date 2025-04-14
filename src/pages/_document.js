import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Force desktop-like viewport */}
        <meta name="viewport" content="width=1024" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
