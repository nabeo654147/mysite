import Image from 'next/image';
import React, { VFC } from 'react';
import ProgressBar from '../molecules/ProgressBar';
import SectionTitle from '../molecules/SectionTitle';
import { skillsData } from 'textData/skillsData';

const Skills: VFC = () => {
  return (
    <section>
      <div className='pt-20 mt-[-40px] w-full min-h-[680px] bg-cover bg-skills'>
        <div className='grid grid-cols-2 pt-12 m-auto max-w-[90%]'>
          <div className='flex justify-end my-auto'>
            <Image src='/img/skill.png' alt='skill' height={372} width={535} />
          </div>
          <div className='pl-8 max-w-[550px]'>
            <SectionTitle title={'スキル'} subTitle={'SKILLS'} justify={'start'} />
            <p className='py-5 text-sm leading-6'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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

export default Skills;
