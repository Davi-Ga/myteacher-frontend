import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Cabecalho></Cabecalho>
    <div>Conteudo</div>
    </>
  )
}

export default MyApp
