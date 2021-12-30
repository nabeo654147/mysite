import Header from '@/components/organism/Header';
import type { NextPage } from 'next';
import Footer from '@/components/organism/Footer';
import Head from 'next/head';
import Main from '@/components/organism/Main';

const Home: NextPage = () => {
  return (
    <div className='tracking-widest'>
      <Head>
        <title>Nabeo page</title>
        <meta name='description' content='Nabeoの自己紹介ページです' />
        <link rel='icon' href='/img/sommelier.png' />
      </Head>
      <Header />
      <Main />
      <Footer myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
