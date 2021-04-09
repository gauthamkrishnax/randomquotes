import Head from 'next/head'
import QuoteBox from './components/QuoteBox'

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Random Quotes</title>
      </Head>
      <QuoteBox />
    </div>
  )
}
