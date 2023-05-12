import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ApplicationContextProvider } from '../../context/AplicationContext'

export default function App({ Component, pageProps }) {
  return (
    <ApplicationContextProvider>
      <Component {...pageProps} />
    </ApplicationContextProvider>
  )
}
