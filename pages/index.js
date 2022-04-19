import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import { getPostsData } from '../lib/post'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

// SSGの場合
// 外部からデータを取得する必要のない場合（ドキュメントやヘルプ）には以下の関数は記述する必要なし
export async function getStaticProps() {
  // データの取得先を指定
  const allPostsData = getPostsData();  // getPostsDataにはid,title,date,thumbnailが格納されている
  console.log(allPostsData);

  // Homeコンポーネントに渡すための記述
  return {
    props: {
      allPostsData,
    }
  }
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すデータを記述
//     }
//   }
// }


export default function Home({ allPostsData }) {
  return (
    // homeがついている場合にはプロフィール画像を大きく表示させるためにhomeという変数を付与
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>未経験からエンジニア転職を目指して日々学習に励んでいます。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>学習の記録</h2>
        <div className={styles.grid}>
         {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>
                  {title}
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
            </article>
         ))}
        </div>
      </section>
    </Layout>
  )
}
