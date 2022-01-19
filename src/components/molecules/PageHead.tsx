import Head from 'next/head';
import { VFC } from 'react';

type Props = {
  title: string;
  description: string;
};

const PageHead: VFC<Props> = ({ title = 'Nabelog', description = 'Nabeoの自己紹介ページです' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta property='description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:image' content='public/img/favicon.png' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={'https://fwywd-mysite.vercel.app/'} />
      <meta property='og:image' content='/img/favicon.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='google-site-verification' content='19voYQSFkBtLthKoUHh0IJPMUEU9gnk-n4-bGXNmw3o' />
      <link rel='icon' href='/img/favicon.png' />
      <link rel='apple-touch-icon' href='/img/favicon.png' />
    </Head>
  );
};

export default PageHead;
