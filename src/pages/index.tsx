import type { NextPage } from 'next';
import Head from 'next/head';
import About from '@/components/organism/About';
import Future from '@/components/organism/Future';
import Hero from '@/components/organism/Hero';
import PageFooter from '@/components/organism/PageFooter';
import PageHeader from '@/components/organism/PageHeader';
import Skills from '@/components/organism/Skills';
import Values from '@/components/organism/Values';

const Home: NextPage = () => {
  return (
    <div className='tracking-widest'>
      <Head>
        <title>Nabeo page</title>
        <meta name='description' content='Nabeoの自己紹介ページです' />
        <link rel='icon' href='/img/sommelier.png' />
      </Head>
      <PageHeader />
      <Hero topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <About />
      <Skills />
      <Values />
      <Future />
      <PageFooter myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
