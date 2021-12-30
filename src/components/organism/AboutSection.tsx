import { VFC } from 'react';
import { contentAbout } from 'textData/content';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';

const AboutSection: VFC = () => {
  return (
    <section>
      <div className='bg-about h-[600px] bg-cover '>
        <div className='pt-14'>
          <SectionTitle title={'私たちについて'} subTitle={'ABOUT'} />
          <Content contents={contentAbout.contents} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
