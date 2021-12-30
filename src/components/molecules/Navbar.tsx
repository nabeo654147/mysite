import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  titles: string[];
};

const Navbar: VFC<Props> = ({ titles }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex justify-around text-[#008c8d] min-w-[400px]'>
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
