import Image from 'next/image';
import { VFC } from 'react';
import Navbar from '../molecules/Navbar';

const Header: VFC<Partial<HTMLHeadElement>> = () => {
  return (
    <header className='flex justify-between flex-wrap'>
      <Image src='/img/logo.png' height={80} width={140} />
      <Navbar titles={['ABOUT', 'SKILLS', 'VALUES', 'FUTURE']}></Navbar>
    </header>
  );
};

export default Header;
