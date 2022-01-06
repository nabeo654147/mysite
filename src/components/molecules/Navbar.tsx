import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  titles: string[];
};

const Navbar: VFC<Props> = ({ titles }) => {
  return (
    <nav className='flex items-center'>
      <ul className=' grid grid-cols-4 gap-4 font-semibold text-font-green'>
        {titles.map((title) => {
          return (
            <li key={title}>
              <Link href={`#${title}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
