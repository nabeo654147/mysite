import { VFC } from 'react';
import Image from 'next/image';

type Props = {
  myName: string;
  copyText: string;
};

const Footer: VFC<Props> = ({ myName, copyText }) => {
  return (
    <footer className='bg-[#262c3a] flex flex-col items-center text-[#fff]'>
      <span className='flex items-center mt-7 mb-9 text-[8px]'>
        CREATED BY<p className='font-bold text-sm ml-3'>{myName}</p>
      </span>
      <Image src='/img/logo_white.png' height={70} width={60}></Image>
      <div className='flex justify-around min-w-[55px] mt-8 mb-4'>
        <Image src='/img/twitter.png' height={12} width={12}></Image>
        <Image src='/img/facebook.png' height={12} width={12}></Image>
      </div>
      <span className='mb-4 text-xs'>&copy; {copyText}</span>
    </footer>
  );
};

export default Footer;
