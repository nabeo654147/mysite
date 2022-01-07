import Image from 'next/image';
import React, { VFC } from 'react';
import SectionTitle from '../molecules/SectionTitle';

const Future: VFC = () => {
  return (
    <section>
      <div className='flex justify-center p-10 mt-[-315px] bg-[#f1f7f8]'>
        <div className='pr-7 my-auto w-4/5 max-w-[550px]'>
          <SectionTitle title={'3年後にやりたいこと'} subTitle={'FUTURE'} justify={'start'} />
          <p className='py-8 text-sm leading-7'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className='my-auto bg-[#f1f7f8]'>
          <Image src='/img/future.png' alt='future' height={251} width={480} />
        </div>
      </div>
    </section>
  );
};

export default Future;
