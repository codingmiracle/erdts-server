import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
