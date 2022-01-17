import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import PageHead from '../molecules/PageHead';

type Props = {
  myName: string;
  copyText: string;
};

const PageFooter: VFC<Props> = ({ myName, copyText }) => {
  return (
    <footer className='flex flex-col items-center mt-[-6px] text-[#fff] bg-[#262c3a]'>
      <span className='hidden items-center mt-9 mb-12 text-[8px] font-semibold sm:flex'>
        CREATED BY<p className='ml-3 text-lg font-bold'>{myName}</p>
      </span>
      <div className='sm:hidden'>
        <span className='grid grid-cols-2 gap-2 mx-auto mt-5 max-w-[60%] text-xs'>
          <Link href={'/'}>
            <a>お問い合わせ</a>
          </Link>
          <Link href={'/'}>
            <a>助成金について</a>
          </Link>
        </span>
        <span className='grid grid-cols-2 gap-5 mt-4 mb-6 ml-auto text-xs'>
          <Link href={'/'}>
            <a>特定商取引法に基づく表記</a>
          </Link>
          <Link href={'/'}>
            <a>プライバシーポリシー</a>
          </Link>
        </span>
      </div>
      <Link href={'/'}>
        <a className='hover:opacity-75'>
          <Image src='/img/logo_white.png' alt='logo_white' height={130} width={110}></Image>
        </a>
      </Link>
      <div className=' grid grid-cols-2 gap-4 mt-12 mb-6'>
        <a href='https://twitter.com/nabeo654147' className='hover:opacity-75'>
          <Image src='/img/twitter.png' alt='twitter' height={17} width={17}></Image>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100052345449049'
          className='hover:opacity-75'
        >
          <Image src='/img/facebook.png' alt='facebook' height={17} width={17}></Image>
        </a>
      </div>
      <span className='mb-5 text-xs'>&copy; {copyText}</span>
    </footer>
  );
};

export default PageFooter;
