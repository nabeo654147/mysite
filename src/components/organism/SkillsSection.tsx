import Image from 'next/image';
import React, { VFC } from 'react';
import ProgressBar from '../molecules/ProgressBar';
import SectionTitle from '../molecules/SectionTitle';
import { skillsData } from 'textData/skillsData';

const SkillsSection: VFC = () => {
  return (
    <section>
      <div className='pt-20 mt-[-40px] w-full min-h-[680px] bg-cover bg-skills'>
        <div className='flex justify-center pt-12 m-auto h-[500px]'>
          <div className='my-auto'>
            <Image src='/img/skill.png' height={350} width={500} />
          </div>
          <div className='pl-8 w-4/5 max-w-[550px]'>
            <SectionTitle title={'スキル'} subTitle={'SKILLS'} justify={'start'} />
            <p className='py-5 text-sm'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className='p-6 bg-white rounded-md'>
              <ProgressBar barItems={skillsData.barItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
