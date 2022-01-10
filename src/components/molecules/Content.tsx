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
    valueTitel?: boolean;
  }[];
  partition?: boolean;
};

const Content: VFC<ContentProps> = ({ contents, partition }) => {
  return (
    <div className={`grid md:grid-cols-3 ${partition === true && 'md:divide-x divide-[#c5eaea]'}`}>
      {contents.map((content) => {
        return (
          <React.Fragment key={content.title}>
            <div className='flex flex-col items-center pt-6 pl-6 my-6 mr-6 max-w-[300px]'>
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
              <p className='text-sm leading-6 text-font-dark'>{content.description}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Content;
