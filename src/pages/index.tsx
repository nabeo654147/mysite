import type { NextPage } from 'next';
import Head from 'next/head';
import About from '@/components/organism/About';
import Footer from '@/components/organism/Footer';
import FutureSection from '@/components/organism/FutureSection';
import Hero from '@/components/organism/Hero';
import PageHeader from '@/components/organism/PageHeader';
import Skills from '@/components/organism/Skills';
import ValuesSection from '@/components/organism/ValuesSection';

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
      <ValuesSection />
      <FutureSection />
      <Footer myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
