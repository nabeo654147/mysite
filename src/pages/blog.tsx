import { VFC } from 'react';
import BlogHero from '@/components/organism/BlogHero';
import BlogMain from '@/components/organism/BlogMain';
import BlogPageHeader from '@/components/organism/BlogPageHeader';
import PageFooter from '@/components/organism/PageFooter';

const BlogPage: VFC = () => {
  return (
    <>
      <BlogPageHeader />
      <BlogHero topTitle='Nabelog' subTitle='~気ままなブログ~' />
      <BlogMain />
      <PageFooter />
    </>
  );
};

export default BlogPage;
