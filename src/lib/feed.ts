//TODO:feed作成のファイルのデータを取得する関数(後のブログページ作った段階で再び着手)

import fs from 'fs';
import { Feed } from 'feed';
// import marked from 'marked';

// function generatedRssFeed(): void {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
//   const date = new Date();
//   const author = {
//     name: 'nabeo',
//     email: 'nabehiko616@gmail.com',
//     link: 'https://twitter.com/nabeo654147',
// };

//   const feed = new Feed({
//     title: process.env.NEXT_PUBLIC_BASE_NAME || '',
//     description: process.env.NEXT_PUBLIC_BASE_DISC,
//     id: baseUrl,
//     link: baseUrl,
//     language: 'ja',
//     image: `${baseUrl}/favicon.png`,  // image には OGP 画像でなくファビコンを指定
//     copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
//     updated: date,
//     feedLinks: {
//       rss2: `${baseUrl}/rss/feed.xml`,
//       json: `${baseUrl}/rss/feed.json`,
//       atom: `${baseUrl}/rss/atom.xml`,
//     },
//     author: author,
//   });

//   // ローカルファイルや API 経由などでファイルのデータを取得する関数を書く
//   // const posts = getPosts(...);

//   // feed で定義した情報から各記事での変更点を宣言
//   posts.forEach((post) => {
//     // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
//     const url = `${baseUrl}/${post.id}`;
//     feed.addItem({
//       title: post.title,
//       description: post.description,
//       id: url,
//       link: url,
//       content: marked(post.content), // marked で markdown => html
//       date: new Date(post.date),
//     });
//   });

//   // フィード情報を public/rss 配下にディレクトリを作って保存
//   fs.mkdirSync('./public/rss', { recursive: true });
//   fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
//   fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
//   fs.writeFileSync('./public/rss/feed.json', feed.json1());
// }

// export default generatedRssFeed;
