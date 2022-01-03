import Image from 'next/image';
import React, { VFC } from 'react';

export type ContentProps = {
  contents: {
    image: string;
    imageHeight: number;
    imageWidth: number;
    title: string;
    titleCSS?: string;
    description: string;
    partition?: boolean;
    valueTitel?: boolean;
  }[];
};

const Content: VFC<ContentProps> = ({ contents }) => {
  return (
    <div className='flex justify-center'>
      {contents.map((content) => {
        return (
          <React.Fragment key={content.title}>
            <div className='flex flex-col items-center max-w-[300px] m-6 pt-6'>
              <Image
                src={`/img/${content.image}`}
                height={content.imageHeight}
                width={content.imageWidth}
              />
              {content.valueTitel === true ? (
                <h3 className='text-[#384359] font-semibold py-4 '>{content.title}</h3>
              ) : (
                <h3 className='text-2xl text-[#008c8d] font-semibold py-4'>{content.title}</h3>
              )}
              <p className='text-[#384359] text-md'>{content.description}</p>
            </div>
            {content.partition === true && (
              <div className='w-0.5 h-[430px] bg-[#c5eaea] my-auto'></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Content;
