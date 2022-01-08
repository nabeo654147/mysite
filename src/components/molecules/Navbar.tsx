import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  titles: string[];
};

const Navbar: VFC<Props> = ({ titles }) => {
  return (
    <nav className='flex items-center -mt-4 sm:mt-0'>
      <ul className='grid grid-cols-4 gap-4 mb-4 font-semibold text-font-green'>
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
