import { VFC } from 'react';
import Image from 'next/image';
import SctionTitle from './SctionTitle';
import Content from './Content';
import { contentAbout } from 'textData/content';

const Main: VFC = () => {
  return (
    <>
      <div className='bg-[#6bc2c3] flex flex-wrap justify-between h-210 text-[#fff]'>
        <div className='flex flex-col my-auto ml-[200px]'>
          <h1 className='text-6xl pb-4'>Nabelog</h1>
          <p className='text-2xl text-[#d9f1eb]'>サブタイトル</p>
        </div>
        <span className='flex justify-end pb-6 pt-10 pr-10'>
          <Image src='/img/hero.png' height={500} width={570}></Image>
        </span>
      </div>
    </>
  );
};

export default Main;
