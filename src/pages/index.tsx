import Header from '@/components/organism/Header';
import type { NextPage } from 'next';
import Footer from '@/components/organism/Footer';
import Head from 'next/head';
import TopSection from '@/components/organism/TopSection';
import AboutSection from '@/components/organism/AboutSection';
import SkillsSection from '@/components/organism/SkillsSection';
import ValuesSection from '@/components/organism/ValuesSection';
import FutureSection from '@/components/organism/FutureSection';

const Home: NextPage = () => {
  return (
    <div className='tracking-widest'>
      <Head>
        <title>Nabeo page</title>
        <meta name='description' content='Nabeoの自己紹介ページです' />
        <link rel='icon' href='/img/sommelier.png' />
      </Head>
      <Header />
      <TopSection topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <AboutSection />
      <SkillsSection />
      <ValuesSection />
      <FutureSection />
      <Footer myName={'渡邉 智彦'} copyText={'2021  KIKAGAKU'} />
    </div>
  );
};

export default Home;
