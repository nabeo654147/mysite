import Image from 'next/image';
import React, { VFC } from 'react';
import ProgressBar from '../molecules/ProgressBar';
import SectionTitle from '../molecules/SectionTitle';
import { skillsData } from 'textData/skillsData';

const Skills: VFC = () => {
  return (
    <section>
      <div className='pt-20 min-h-[930px] bg-cover bg-skills-sp sm:min-h-[680px] sm:bg-skills-pc md:mt-20 xl:mt-[-50px]'>
        <div className='mx-auto w-[290px]'>
          <SectionTitle title={'スキル'} subTitle={'SKILLS'} justify={'end'} />
        </div>
        <div className='grid max-w-[90%] sm:grid-cols-2'>
          <div className='flex justify-end m-4 my-auto'>
            <Image src='/img/skill.png' alt='skill' height={372} width={535} />
          </div>
          <div className='pl-8 max-w-[550px]'>
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
