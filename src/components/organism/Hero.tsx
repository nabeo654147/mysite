import Image from 'next/image';
import { VFC } from 'react';

type Props = {
  topTitle: string;
  subTitle: string;
};

const Hero: VFC<Props> = ({ topTitle, subTitle }) => {
  return (
    <section className=' bg-[#6bc2c3]'>
      <div className='grid grid-cols-2 flex-wrap max-w-[90%] ml-auto text-[#fff]'>
        <div className='flex flex-col my-auto'>
          <h1 className='text-6xl tracking-widest'>{topTitle}</h1>
          <p className='font-semibold mt-4 text-2xl text-[#d9f1eb]'>{subTitle}</p>
        </div>
        <span className='flex justify-end pt-10 pr-10 pb-6'>
          <Image src='/img/hero.png' alt={'hero'} height={498} width={585}></Image>
        </span>
      </div>
    </section>
  );
};

export default Hero;
