import { VFC } from 'react';
import Image from 'next/image';

type Props = {
  myName: string;
  copyText: string;
};

const Footer: VFC<Props> = ({ myName, copyText }) => {
  return (
    <footer className='bg-[#262c3a] flex flex-col items-center text-[#fff]'>
      <span className='flex font-semibold items-center mt-9 mb-12 text-[8px]'>
        CREATED BY<p className='font-bold text-lg ml-3'>{myName}</p>
      </span>
      <Image src='/img/logo_white.png' height={130} width={110}></Image>
      <div className='flex justify-around min-w-[55px] mt-12 mb-6'>
        <Image src='/img/twitter.png' height={17} width={17}></Image>
        <Image src='/img/facebook.png' height={17} width={17}></Image>
      </div>
      <span className='mb-5 text-xs'>&copy; {copyText}</span>
    </footer>
  );
};

export default Footer;
