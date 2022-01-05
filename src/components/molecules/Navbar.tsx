import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  titles: string[];
};

const Navbar: VFC<Props> = ({ titles }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex justify-around min-w-[400px] font-semibold text-font-green'>
        {titles.map((title) => {
          return (
            <li key={title}>
              <Link href={'/'}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
