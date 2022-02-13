import { Client } from '@notionhq/client';
import { GetStaticProps } from 'next';
import { VFC } from 'react';
import BlogHero from '@/components/organism/BlogHero';
import BlogMain from '@/components/organism/BlogMain';
import BlogPageHeader from '@/components/organism/BlogPageHeader';
import PageFooter from '@/components/organism/PageFooter';
// import type { NotionProperty } from '@types/notiondata';
import { getNotionData } from 'lib/getNotionData';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

const BlogPage: VFC<any> = ({ posts }) => {
  return (
    <>
      <BlogPageHeader />
      <BlogHero topTitle='Nabelog' subTitle='~気ままなブログ~' />
      <BlogMain posts={posts} />
      <PageFooter />
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID);

  return {
    props: {
      posts: database,
    },
  };
};
