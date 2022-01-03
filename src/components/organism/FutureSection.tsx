import React, { VFC } from 'react';
import Image from 'next/image';
import SectionTitle from '../molecules/SectionTitle';

const FutureSection: VFC = () => {
  return (
    <section>
      <div className='flex justify-center mt-[-315px] p-10'>
        <div className='pr-7 w-4/5 max-w-[550px] my-auto'>
          <SectionTitle title={'3年後にやりたいこと'} subTitle={'FUTURE'} justify={'start'} />
          <p className='text-sm py-8'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className='my-auto bg-[#f1f7f8]'>
          <Image src='/img/future.png' height={230} width={450} className='bg-[#f1f7f8]' />
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
