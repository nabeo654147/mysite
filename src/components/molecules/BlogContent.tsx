import Image from 'next/image';
import { VFC } from 'react';
import BlogTag from '../atom/BlogTag';

const BlogContent: VFC<any> = ({ posts }) => {
  console.log(posts);
  return (
    <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {posts &&
        posts.map((post: any, i: number) => {
          return (
            <div key={`content${i}`} className='max-w-[300px] bg-white rounded-b-lg'>
              <Image
                className='bg-gray-300 rounded-t-lg'
                // src={`/img/${blogItem.blogImage}`}
                src={'/img/value2.png'}
                alt='blogImage'
                width={300}
                height={200}
                layout='responsive'
                objectFit='cover'
              />
              <div className='flex flex-col p-4'>
                <span>{post.properties.Date.date.start}</span>
                <p className='py-5'>{post.properties.Title.title[0].text.content}</p>
                <div className='flex'>
                  {post.properties.Tags.multi_select.map((tag: any, i: number) => {
                    return <BlogTag text={tag.name} color={tag.color} key={`tag${i}`} />;
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
