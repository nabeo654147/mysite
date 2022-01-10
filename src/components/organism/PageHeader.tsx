import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import Navbar from '../molecules/Navbar';

const PageHeader: VFC = () => {
  return (
    <header className='flex flex-wrap justify-center mx-auto max-w-[97%] sm:justify-between'>
      <Link href='/'>
        <a className=' hover:opacity-75'>
          <Image src='/img/logo.png' alt='logo' height={100} width={200} />
        </a>
      </Link>
      <Navbar titles={['ABOUT', 'SKILLS', 'VALUES', 'FUTURE']}></Navbar>
    </header>
  );
};

export default PageHeader;
