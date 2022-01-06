import { VFC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  justify?: 'center' | 'start';
};

const SectionTitle: VFC<Props> = ({ title, subTitle, justify = 'center' }) => {
  return (
    <div className={`flex w-full justify-${justify}`}>
      <h2 className='mr-4 text-3xl font-semibold text-font-dark' id={subTitle}>
        {title}
      </h2>
      <h3 className='flex items-center text-xl font-normal text-font-green'>{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
