import { VFC } from 'react';

type Props = {
  text?: string;
  color: string;
};

const BlogTag: VFC<Props> = ({ text, color }) => {
  return (
    <div className='mr-2'>
      {color === 'green' ? (
        <p className='p-1 min-w-[80px] text-center text-strongGreen rounded-md border-2 border-strongGreen'>
          {text}
        </p>
      ) : (
        <p
          className={`p-1 min-w-[80px] text-center text-${color}-400 rounded-md border-2 border-${color}-400`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default BlogTag;
