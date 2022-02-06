import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

const PageHeader: VFC = () => {
  return (
    <header className='flex flex-wrap justify-center my-3 mx-auto max-w-[97%] sm:justify-between sm:my-0'>
      <Link href='/'>
        <a className=' hover:opacity-75'>
          <Image src='/img/logo.png' alt='logo' height={100} width={200} />
        </a>
      </Link>
      <div className='grid gap-3 items-center text-lg font-bold sm:grid-cols-2'>
        <button className='w-36 h-12 text-white bg-strongGreen rounded-md hover:opacity-75'>
          投稿
        </button>
        <button className='w-36 h-12 text-strongGreen rounded-md border-2 border-strongGreen hover:opacity-70'>
          ログアウト
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
