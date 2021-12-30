import { VFC } from 'react';
import TopSection from './TopSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';

const Main: VFC = () => {
  return (
    <>
      <TopSection topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <AboutSection />
      <SkillsSection />
    </>
  );
};

export default Main;
