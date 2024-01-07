import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
