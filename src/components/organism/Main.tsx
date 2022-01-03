import { VFC } from 'react';
import TopSection from './TopSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ValuesSection from './ValuesSection';

const Main: VFC = () => {
  return (
    <>
      <TopSection topTitle={'Nabelog'} subTitle={'サブタイトル'} />
      <AboutSection />
      <SkillsSection />
      <ValuesSection />
    </>
  );
};

export default Main;
