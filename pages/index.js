import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dwi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, Vaishnavi here (⌐■_■)!
        </h1>

        <p className={styles.description}>
         If you haven't watched fight club, plis leave now!
        </p>

        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <a><h3>Stuff I built &rarr;</h3></a>
          </Link>

          <Link href="/blogs" className={styles.card}>
            <a><h3>Stuff I wrote &rarr;</h3></a>
            
          </Link>

          <Link
            href="/accolades"
            className={styles.card}
          >
            <a><h3>Stuff I achieved &rarr;</h3></a>
          </Link>

          <Link
            href="https://vaishnavidwivedi.me/developers-guide"
            className={styles.card}
          >
            <a><h3>Developers' Guide &rarr;</h3></a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </Link>
      </footer>
    </div>
  )
}
