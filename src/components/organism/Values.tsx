import { VFC } from 'react';
import Content from '../molecules/Content';
import SectionTitle from '../molecules/SectionTitle';
import { contentValues } from 'textData/content';

const Values: VFC = () => {
  return (
    <section>
      <div className='sm:pt-14'>
        <div className='mt-[350px] min-h-[620px] bg-cover sm:pt-20 sm:mt-[230px] sm:bg-future-pc'>
          <div className='mt-[-320px]'>
            <SectionTitle title={'価値観'} subTitle={'VALUES'} />
            <div className='flex justify-center p-3 mx-auto max-w-[90%] bg-[#ffffff] rounded-md xl:max-w-[70%]'>
              <Content contents={contentValues.contents} partition={contentValues.partition} />
            </div>
          </div>
        </div>
        <div className='relative top-[-400px] left-0 -z-10 h-[500px] bg-future-sp sm:hidden' />
      </div>
    </section>
  );
};

export default Values;
