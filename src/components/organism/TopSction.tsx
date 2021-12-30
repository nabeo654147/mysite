import { VFC } from 'react';
import Image from 'next/image';

type Props = {
  topTitle: string;
  subTitle: string;
};

const TopSction: VFC<Props> = ({ topTitle, subTitle }) => {
  return (
    <div className='bg-[#6bc2c3] flex flex-wrap justify-between h-210 text-[#fff]'>
      <div className='flex flex-col my-auto ml-[200px]'>
        <h1 className='text-6xl pb-4'>{topTitle}</h1>
        <p className='text-2xl text-[#d9f1eb]'>{subTitle}</p>
      </div>
      <span className='flex justify-end pb-6 pt-10 pr-10'>
        <Image src='/img/hero.png' height={500} width={570}></Image>
      </span>
    </div>
  );
};

export default TopSction;
