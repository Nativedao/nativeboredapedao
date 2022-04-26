import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Native Bored Ape DAO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Native Bored Ape DAO!" />
        <p className="description">
          The native Passport of Native Metaverse <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
