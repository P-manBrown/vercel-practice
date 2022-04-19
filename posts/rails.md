---
title: "【Rails】mysql2のインストールができない場合の対処法【MySQL】"
date: "2022年01月13日"
thumbnail: "/images/thumbnail04.jpg"
---
## はじめに
　本記事は、プログラミング初学者が、学習を進めていて疑問に思った点について調べた結果を備忘録も兼ねてまとめたものです。
　そのため、記事の内容に誤りが含まれている可能性があります。ご容赦ください。
　間違いを見つけた方は、お手数ですが、ご指摘いただけますと幸いです。

##mysql2のインストールができない場合の対処法

###環境
OS: MacOS Big Sur 11.6.1（M1 mac）
Ruby: 2.7.5
Rails: 5.2.6
MySQL: 5.7（8.0でも確認しました。）

###状況
データベースをMySQLに指定した上で`rails new`をした後に`bundle install`をしても以下のような文章が出力され、インストールできませんでした。
また、インストールができても`rails s`をした際に`Load Error`が出てしまう状況でした。

```
linking shared-object mysql2/mysql2.bundle
ld: library not found for -lzstd
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [mysql2.bundle] Error 1

make failed, exit code 2

Gem files will remain installed in /Users/taichi/.anyenv/envs/rbenv/versions/2.6.6/lib/ruby/gems/2.6.0/gems/mysql2-0.5.3 for inspection.
Results logged to
/Users/taichi/.anyenv/envs/rbenv/versions/2.6.6/lib/ruby/gems/2.6.0/extensions/x86_64-darwin-21/2.6.0/mysql2-0.5.3/gem_make.out

An error occurred while installing mysql2 (0.5.3), and Bundler cannot continue.
Make sure that `gem install mysql2 -v '0.5.3' --source 'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
mysql2

```

### 解決した方法
私の場合には、以下の方法で解決しました。

```
openssl@3とzstdをインストール
$ brew install openssl@3 zstd

openssl@3のパスを通す
$ echo 'export PATH="/opt/homebrew/opt/openssl@3/bin:$PATH"' >> ~/.zshrc

LIBRARY_PATHにzstdを追加する
$ export LIBRARY_PATH=$LIBRARY_PATH:$(brew --prefix zstd)/lib

ld-flags に openssl@3/libを追加する
$ bundle config --local build.mysql2  "--with-ldflags=-L$(brew --prefix openssl@3)/lib"
※.bundle/configに
　  BUNDLE_BUILD__MYSQL2: "--with-ldflags=-L/opt/homebrew/opt/openssl@3/lib"
  と記述されているのを確認する。

bundle installする
$　bundle install

```
