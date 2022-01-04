import Image from 'next/image';
import { VFC } from 'react';
import Navbar from '../molecules/Navbar';

const Header: VFC<Partial<HTMLHeadElement>> = () => {
  return (
    <header className='flex justify-between flex-wrap'>
      <Image src='/img/logo.png' height={100} width={200} />
      <Navbar titles={['ABOUT', 'SKILLS', 'VALUES', 'FUTURE']}></Navbar>
    </header>
  );
};

export default Header;
