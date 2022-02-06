import { VFC } from 'react';

type Props = {
  text?: string;
};

const BlogTag: VFC<Props> = ({ text }) => {
  return (
    <div className='mr-2'>
      <p className='p-1 min-w-[80px] text-center text-strongGreen rounded-md border-2 border-strongGreen'>
        {text}
      </p>
    </div>
  );
};

export default BlogTag;
