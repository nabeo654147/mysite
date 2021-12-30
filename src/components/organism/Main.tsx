import { VFC } from 'react';
import SctionTitle from '../molecules/SctionTitle';
import Content from '../molecules/Content';
import TopSction from './TopSction';
import { contentAbout } from 'textData/content';

const Main: VFC = () => {
  return (
    <>
      <TopSction topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <div>
        <div
          className='h-[564px] w-full bg-cover'
          style={{ backgroundImage: `url(/img/bg-about.png)` }}
        >
          <div className='pt-14'>
            <SctionTitle title={'私たちについて'} subTitle={'ABOUT'} />
            <Content contents={contentAbout.contents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
