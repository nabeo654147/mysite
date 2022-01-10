import { VFC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  justify?: 'start' | 'center' | 'end';
};

const SectionTitle: VFC<Props> = ({ title, subTitle, justify = 'center' }) => {
  return (
    <div className={`flex items-center flex-col md:flex-row mx-auto justify-${justify}`}>
      <h2 className='text-2xl font-semibold text-font-dark sm:mr-4 sm:text-3xl' id={subTitle}>
        {title}
      </h2>
      <h3 className='flex items-center font-normal text-font-green sm:text-xl'>{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
