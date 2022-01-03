import { VFC } from 'react';
import { contentValues } from 'textData/content';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';

const ValuesSection: VFC = () => {
  return (
    <section>
      <div className='pt-14'>
        <div className='bg-future h-[620px] w-full bg-cover  pt-20 mt-[230px]'>
          <div className='mt-[-320px]'>
            <SectionTitle title={'価値観'} subTitle={'VALUES'} />
            <div className='flex mx-auto bg-[#ffff] w-[1000px] rounded-md p-3'>
              <Content contents={contentValues.contents} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
