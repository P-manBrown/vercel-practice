import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "P-man Brown"
export const siteTitle = "Next.js blog"

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {/* Linkにhomeがついている場合とついていない場合で表示を切り替える */}
        {home ? (
          <>
            <img
              src="/images/pb-logo.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
            <h1 className={utilStyles.heading}>{name}の学習記録</h1>
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <>
          <Link href="/">← ホームへ戻る</Link>
        </>
      )}
    </div>
  );
}

export default Layout;