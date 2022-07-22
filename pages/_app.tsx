import '../styles/globals.css'
import Link from 'next/link'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='container mx-auto px-4 py-2'>
      <h1 className='text-2xl'>Soal 1: Aplikasi Pecahan Bilangan</h1>
      <Link href="/pecahan">
        Ke halaman Soal 1
      </Link>
      <h1 className='text-2xl'>Soal 2: Aplikasi Interval Bar Chart</h1>
      <Link href="/chart">
        Ke halaman Soal 2
      </Link>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
