import Image from 'next/image';
import { VFC } from 'react';
import BlogTag from '../atom/BlogTag';
import { type BlogItems } from '../organism/BlogMain';

type BlogItemsProps = {
  blogItems: BlogItems[];
};

const BlogContent: VFC<BlogItemsProps> = ({ blogItems }) => {
  return (
    <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {blogItems.map((blogItem) => {
        return (
          <div key={blogItem.title} className='max-w-[300px] bg-white rounded-b-lg'>
            <Image
              className='bg-gray-300 rounded-t-lg'
              src={`/img/${blogItem.blogImage}`}
              alt='blogImage'
              width={300}
              height={200}
              layout='responsive'
              objectFit='cover'
            />
            <div className='flex flex-col p-4'>
              <span>{blogItem.createAt}</span>
              <p className='py-5'>{blogItem.title}</p>
              <div className='flex'>
                {blogItem.tagNames.map((tagName, i) => {
                  return <BlogTag text={tagName} key={i} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogContent;
