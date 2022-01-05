import { VFC } from 'react';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';
import { contentAbout } from 'textData/content';

const AboutSection: VFC = () => {
  return (
    <section>
      <div className='h-[600px] bg-cover bg-about'>
        <div className='pt-14'>
          <SectionTitle title={'私たちについて'} subTitle={'ABOUT'} />
          <Content contents={contentAbout.contents} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
