// ここにstylesをインポートすることで全てのコンポーネントに対して有効にすることができる
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
