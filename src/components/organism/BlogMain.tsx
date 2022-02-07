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

const blogItems: BlogItems[] = [
  {
    blogImage: 'hero.png',
    createAt: '2022/xx/xx',
    title: 'サンプルタイトル',
    tagNames: ['fwywd', '機械学習'],
  },
  {
    blogImage: 'hero2.png',
    createAt: '2022/xx/xx',
    title: 'サンプルタイトル2',
    tagNames: ['ビジネス', '機械学習'],
  },
  {
    blogImage: 'value1.png',
    createAt: '2022/xx/xx',
    title: 'サンプルタイトル3',
    tagNames: ['ビジネス', '機械学習'],
  },
  {
    blogImage: 'value2.png',
    createAt: '2022/xx/xx',
    title: 'サンプルタイトルこんにちは今日はいい天気ですね!',
    tagNames: ['キカガク', '機械学習'],
  },
];

const BlogMain: VFC = () => {
  return (
    <section className='bg-[#f1f7f8]'>
      <div className='container p-7 mx-auto'>
        <div className='flex'>
          <BlogTag text='ビジネス' />
          <p className='my-auto ml-4'>{`1/26 ページ`}</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <BlogContent blogItems={blogItems} />
          <PageButton />
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
