import { VFC } from 'react';
import SectionTitle from '../molecules/SectionTitle';
import Content from '../molecules/Content';
import TopSection from './TopSection';
import { contentAbout } from 'textData/content';

const Main: VFC = () => {
  return (
    <>
      <TopSection topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <div>
        <div
          className='h-[564px] w-full bg-cover'
          style={{ backgroundImage: `url(/img/bg-about.png)` }}
        >
          <div className='pt-14'>
            <SectionTitle title={'私たちについて'} subTitle={'ABOUT'} />
            <Content contents={contentAbout.contents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
