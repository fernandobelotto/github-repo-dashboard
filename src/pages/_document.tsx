import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, CSSReset } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body>
          <ColorModeScript />
          <CSSReset />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
