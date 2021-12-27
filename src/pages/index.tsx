import Header from '@/components/Header';
import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nabeo page</title>
        <meta name='description' content='Nabeoの自己紹介ページです' />
        <link rel='icon' href='/img/sommelier.png' />
      </Head>
      <Header />

      <main></main>

      <Footer myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
