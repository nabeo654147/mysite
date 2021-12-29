import Image from 'next/image';
import { VFC } from 'react';

export type ContentProps = {
  contents: {
    image: string;
    title: string;
    description: string;
  }[];
};

const Content: VFC<ContentProps> = ({ contents }) => {
  return (
    <div className='flex justify-center'>
      {contents.map((content) => {
        return (
          <div className='flex flex-col items-center max-w-[300px] m-6 pt-6'>
            <Image src={`/img/${content.image}`} height={150} width={200} />
            <h3 className='text-2xl text-[#008c8d] font-semibold py-4'>{content.title}</h3>
            <p className='text-[#384359]'>{content.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
