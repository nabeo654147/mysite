import { VFC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  justify?: 'center' | 'start';
};

const SectionTitle: VFC<Props> = ({ title, subTitle, justify = 'center' }) => {
  return (
    <div className={`flex w-full justify-${justify}`}>
      <h2 className='mr-4 text-3xl font-semibold text-[#384359]'>{title}</h2>
      <p className='flex items-center text-xl font-normal text-[#008c8d]'>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
