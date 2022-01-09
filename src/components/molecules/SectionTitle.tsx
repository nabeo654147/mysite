import { VFC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  justify?: 'center' | 'start';
};

const SectionTitle: VFC<Props> = ({ title, subTitle, justify = 'center' }) => {
  return (
    <div className={`flex items-center flex-col sm:flex-row mx-auto justify-${justify}`}>
      <h2 className='mr-4 text-2xl font-semibold text-font-dark sm:text-3xl' id={subTitle}>
        {title}
      </h2>
      <h3 className='flex items-center text-xl font-normal text-font-green'>{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
