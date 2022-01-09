import { VFC } from 'react';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';
import { contentAbout } from 'textData/content';

const About: VFC = () => {
  return (
    <section>
      <div className='xl:h-[600px] xl:bg-cover xl:bg-about-pc'>
        <div className='pt-14 mx-auto xl:max-w-[70%]'>
          <SectionTitle title={'私たちについて'} subTitle={'ABOUT'} />
          <div className='flex justify-center'>
            <Content contents={contentAbout.contents} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
