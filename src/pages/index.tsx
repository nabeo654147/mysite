import Header from '@/components/Header';
import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nabeo page</title>
        <meta name='description' content='Nabeoの自己紹介ページです' />
        <link rel='icon' href='/img/sommelier.png' />
      </Head>
      <Header />
      <div className='bg-[#6bc2c3] flex flex-wrap justify-between h-210 text-[#fff]'>
        <div className='flex flex-col my-auto ml-[200px]'>
          <h1 className='text-6xl pb-4'>Nabelog</h1>
          <p className='text-2xl text-[#d9f1eb]'>サブタイトル</p>
        </div>
        <span className='flex justify-end pb-6 pt-10 pr-10'>
          <Image src='/img/hero.png' height={500} width={570}></Image>
        </span>
      </div>

      <main></main>

      <Footer myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
