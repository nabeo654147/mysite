import Image from 'next/image';
import React, { VFC } from 'react';
import SectionTitle from '../molecules/SectionTitle';

const Future: VFC = () => {
  return (
    <section className='mt-[-430px] bg-[#f1f7f8] sm:mt-0'>
      <div className='grid mx-auto sm:py-10 sm:max-w-[90%] md:grid-cols-2 md:mt-[-315px] xl:max-w-[75%]'>
        <div className='my-auto'>
          <SectionTitle title={'3年後にやりたいこと'} subTitle={'FUTURE'} justify={'start'} />
          <p className='flex justify-center items-center py-8 pr-2 pl-4 text-sm leading-7 sm:px-0'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className='m-auto bg-inherit sm:bg-[#f1f7f8] md:pl-7'>
          <Image src='/img/future.png' alt='future' height={251} width={480} />
        </div>
      </div>
    </section>
  );
};

export default Future;
