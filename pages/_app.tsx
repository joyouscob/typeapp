import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Header from '../components/header'
import GlobalStyle from '../globalstyles'

//you can move this to another file if you want
const theme: DefaultTheme = {

    primary: '#111',
    secondary: '#0070f3',
    white: "#fff",
    brightBlue: "#3E64E5",
    silver: "silver",
    darkGrey:"#31343e",

}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
