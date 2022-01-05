import Image from 'next/image';
import { VFC } from 'react';

type Props = {
  topTitle: string;
  subTitle: string;
};

const TopSection: VFC<Props> = ({ topTitle, subTitle }) => {
  return (
    <section>
      <div className='flex flex-wrap justify-between text-[#fff] bg-[#6bc2c3] h-210'>
        <div className='flex flex-col my-auto ml-[200px]'>
          <h1 className='pb-4 text-6xl'>{topTitle}</h1>
          <p className='text-2xl text-[#d9f1eb]'>{subTitle}</p>
        </div>
        <span className='flex justify-end pt-10 pr-10 pb-6'>
          <Image src='/img/hero.png' height={500} width={570}></Image>
        </span>
      </div>
    </section>
  );
};

export default TopSection;
