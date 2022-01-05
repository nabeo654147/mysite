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
            <div className='flex flex-col items-center pt-6 m-6 max-w-[300px]'>
              <Image
                src={`/img/${content.image}`}
                alt={`${content.image}`}
                height={content.imageHeight}
                width={content.imageWidth}
              />
              {content.valueTitel === true ? (
                <h3 className='py-4 font-semibold text-font-dark'>{content.title}</h3>
              ) : (
                <h3 className='py-4 text-2xl font-semibold text-font-green'>{content.title}</h3>
              )}
              <p className='text-font-dark'>{content.description}</p>
            </div>
            {content.partition === true && (
              <div className='my-auto w-0.5 h-[430px] bg-[#c5eaea]'></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Content;
