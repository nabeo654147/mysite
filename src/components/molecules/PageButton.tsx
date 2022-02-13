import { VFC } from 'react';

type Props = {
  text?: string;
};

const PageButton: VFC<Props> = () => {
  return (
    <div className='pt-12 mx-auto'>
      <button className='p-2 w-[60px] text-white bg-strongGreen rounded-l-md border-2 border-strongGreen sm:w-[80px]'>
        前へ
      </button>
      <button className='p-2 mx-1 w-[120px] text-white bg-strongGreen border-2 border-strongGreen sm:w-[160px]'>{`1/26　⬇︎`}</button>
      <button className='p-2 w-[60px] text-white bg-strongGreen rounded-r-md border-2 border-strongGreen sm:w-[80px]'>
        次へ
      </button>
    </div>
  );
};

export default PageButton;
