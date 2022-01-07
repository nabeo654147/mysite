import Image from 'next/image';
import { VFC } from 'react';

type Props = {
  myName: string;
  copyText: string;
};

const PageFooter: VFC<Props> = ({ myName, copyText }) => {
  return (
    <footer className='flex flex-col items-center text-[#fff] bg-[#262c3a]'>
      <span className='flex items-center mt-9 mb-12 text-[8px] font-semibold'>
        CREATED BY<p className='ml-3 text-lg font-bold'>{myName}</p>
      </span>
      <Image src='/img/logo_white.png' alt='logo_white' height={130} width={110}></Image>
      <div className=' grid grid-cols-2 gap-4 mt-12 mb-6'>
        <Image src='/img/twitter.png' alt='twitter' height={17} width={17}></Image>
        <Image src='/img/facebook.png' alt='facebook' height={17} width={17}></Image>
      </div>
      <span className='mb-5 text-xs'>&copy; {copyText}</span>
    </footer>
  );
};

export default PageFooter;