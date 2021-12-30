import { VFC } from 'react';

type Props = {
  title: string;
  subTitle: string;
};

const SectionTitle: VFC<Props> = ({ title, subTitle }) => {
  return (
    <div className='flex w-full justify-center'>
      <h2 className='font-semibold text-3xl text-[#384359] mr-4'>{title}</h2>
      <p className=' font-normal flex items-center text-xl text-[#008c8d]'>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
