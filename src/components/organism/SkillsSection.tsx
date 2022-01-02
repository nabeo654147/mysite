import React, { VFC } from 'react';
import Image from 'next/image';
import SectionTitle from '../molecules/SectionTitle';
import ProgressBar from '../molecules/ProgressBar';
import { skillsData } from 'textData/skillsData';

const SkillsSection: VFC = () => {
  return (
    <section>
      <div className='bg-skills min-h-[680px] w-full bg-cover mt-[-40px] pt-20'>
        <div className='flex justify-center pt-12 m-auto h-[500px]'>
          <div className='my-auto'>
            <Image src='/img/skill.png' height={350} width={500} />
          </div>
          <div className='pl-8 w-4/5 max-w-[550px]'>
            <SectionTitle title={'スキル'} subTitle={'SKILLS'} justify={'start'} />
            <p className='text-sm py-5'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className='bg-white rounded-md p-6'>
              <ProgressBar barItems={skillsData.barItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
