import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from '../../styles/utils.module.css';

// 動的ルーティングのためにはgetStaticPathsを使用する必要がある。
// getStaticPathsにはデータのPathが必要になる→Post.jsでPathを返す関数を準備する

export async function getStaticPaths() {
  // pathを指定する。ここではpost.jsで設定したgetAllPostIdsを指定
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

// getStaticPathsはgetStaticPropsと同時に使用する必要がある
// 外部のデータを取得する必要があるため
export async function getStaticProps({ params }) {
  // getPostDataにはidを渡す必要があるため(params.id)と記述
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>

      </article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        {/* HTMLを表示させるための記述 */}
        {/* reactのdangerouslySetInnerHTMLを使用する */}
        {/* 名前のとおりそのままでは危険。本来はサニタイズが必要 */}
        <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}} />
    </Layout>
  );
}