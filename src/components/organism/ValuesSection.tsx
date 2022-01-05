import { VFC } from 'react';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';
import { contentValues } from 'textData/content';

const ValuesSection: VFC = () => {
  return (
    <section>
      <div className='pt-14'>
        <div className='pt-20 mt-[230px] w-full h-[620px] bg-cover bg-future'>
          <div className='mt-[-320px]'>
            <SectionTitle title={'価値観'} subTitle={'VALUES'} />
            <div className='flex p-3 mx-auto w-[1000px] bg-[#ffff] rounded-md'>
              <Content contents={contentValues.contents} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
