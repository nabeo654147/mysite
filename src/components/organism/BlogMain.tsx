import { VFC } from 'react';
import BlogTag from '../atom/BlogTag';
import BlogContent from '../molecules/BlogContent';
import PageButton from '../molecules/PageButton';

export type BlogItems = {
  blogImage: string;
  createAt: string;
  title: string;
  tagNames: string[];
};

const BlogMain: VFC<any> = ({ posts }) => {
  return (
    <section className='bg-[#f1f7f8]'>
      <div className='container p-7 mx-auto'>
        <div className='flex'>
          <BlogTag text='ビジネス' color='orange' />
          <p className='my-auto ml-4'>{`1/26 ページ`}</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <BlogContent posts={posts} />
          <PageButton />
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
