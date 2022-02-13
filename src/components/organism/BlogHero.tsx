import Image from 'next/image';
import { VFC } from 'react';

type Props = {
  topTitle: string;
  subTitle: string;
};

const BlogHero: VFC<Props> = ({ topTitle, subTitle }) => {
  return (
    <section className='bg-[#6bc2c3] bg-cover bg-hero2-bg'>
      <div className='grid justify-center mx-auto max-w-[90%] text-[#fff] sm:grid-cols-2 sm:ml-auto'>
        <div className='flex flex-col items-center pt-8 my-auto sm:items-start'>
          <h1 className='text-4xl tracking-widest sm:text-5xl md:text-6xl'>{topTitle}</h1>
          <h2 className='mt-4 text-xl font-semibold text-[#d9f1eb] sm:text-2xl'>{subTitle}</h2>
        </div>
        <span className='flex justify-end mt-10 mb-6 max-w-[292px] max-h-[249px] sm:mr-10 sm:max-w-fit sm:max-h-fit'>
          <Image src='/img/hero2.png' alt={'hero2'} height={371} width={625}></Image>
        </span>
      </div>
    </section>
  );
};

export default BlogHero;
