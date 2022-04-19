---
title: "【Next.js】ルーティングの設定方法"
date: "2022年04月13日"
thumbnail: "/images/thumbnail03.jpeg"
---
## はじめに
　本記事は、プログラミング初学者が学習を進めていて疑問に思った点について調べた結果を備忘録も兼ねてまとめたものです。
　そのため、記事の内容に誤りが含まれている可能性があります。ご容赦ください。
　間違いを見つけた方は、お手数ですが、ご指摘いただけますと幸いです。

## ルーティングの設定方法
### Reactの場合
Reactの場合には`react-router-dom`を使用して以下のようにルーティングの設定をします。

```Router.jsx
    <BrowserRouter>
      <Routes>
        <Route path="sign_in" element={<SignIn />} />
        <Route path="sign_up" element={<SignUp />} />
        <Route path="mypage" element={<PrivateRoute><Header /><MyPage /></PrivateRoute>} />
        <Route path="todo" element={<PrivateRoute><Header /><PageTodo /></PrivateRoute>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
```

### Next.jsの場合
Next.jsの場合には、`pages`フォルダにファイルを作成することでルーティングを設定できます。
具体的には以下の通りです。

#### `pages`フォルダにファイルを作成する
まず、`pages`フォルダにフォルダを追加します。
今回は、`posts`フォルダを追加します。
次に、`posts`フォルダの中にファイルを作成します。
今回は、`samplePost.js`ファイルを作成します。
![スクリーンショット 2022-04-12 23.56.19.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2342443/c6e6813b-28c8-8c22-eb03-cfcab27d41a8.png)
このようにすることで、http://localhost:3000/posts/samplePost で`samplePost.js`の中身が表示されます。

#### 内容を記述する
ファイルの作成ができたら、内容を記述していきます。

```samplePost.js
export default function() {
  return (
    <>
      <h1>samplePost</h1>
      <p>samplePostのページが表示されています。</p>
    </>
  );
}
```

#### ローカルサーバーを立ち上げる
ターミナルで`npm run dev`を実行するとローカルサーバーを立ち上げることができます。
```:ターミナル
$ npm run dev
```

#### ブラウザで表示を確認する
`posts`フォルダ内の`samplPost.js`の内容が表示されるか確認します。
ブラウザを開いて、http://localhost:3000/posts/samplePost にアクセスします。
すると以下のように`samplePost.js`に記述した内容が表示されます。

![スクリーンショット 2022-04-12 23.46.24.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2342443/bc31552b-2122-0071-3c09-851aba7fba7b.png)

上記のように、`pages`フォルダにフォルダやファイルを作成することでルーティングを設定することができます。