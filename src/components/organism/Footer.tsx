import Image from 'next/image';
import { VFC } from 'react';

type Props = {
  myName: string;
  copyText: string;
};

const Footer: VFC<Props> = ({ myName, copyText }) => {
  return (
    <footer className='flex flex-col items-center text-[#fff] bg-[#262c3a]'>
      <span className='flex items-center mt-9 mb-12 text-[8px] font-semibold'>
        CREATED BY<p className='ml-3 text-lg font-bold'>{myName}</p>
      </span>
      <Image src='/img/logo_white.png' height={130} width={110}></Image>
      <div className='flex justify-around mt-12 mb-6 min-w-[55px]'>
        <Image src='/img/twitter.png' height={17} width={17}></Image>
        <Image src='/img/facebook.png' height={17} width={17}></Image>
      </div>
      <span className='mb-5 text-xs'>&copy; {copyText}</span>
    </footer>
  );
};

export default Footer;
