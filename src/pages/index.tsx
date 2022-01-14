import type { NextPage } from 'next';
import PageHead from '@/components/molecules/PageHead';
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
      <PageHead title='Nabelog' description='Nabeoの自己紹介ページです' />
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
