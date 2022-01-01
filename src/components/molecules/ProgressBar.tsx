import { VFC } from 'react';

export type ProgressBarProps = {
  barItems: {
    barName: string;
    percent: number;
    percentWidth: string;
  }[];
};

const ProgressBar: VFC<ProgressBarProps> = ({ barItems }) => {
  return (
    <>
      {barItems.map((item) => {
        return (
          <div className='relative pt-2' key={item.barName}>
            <div className='flex items-center'>
              <div>
                <span className='inline-block text-base font-semibold tracking-wider text-[#008c8d] uppercase'>
                  {item.barName}
                </span>
              </div>
            </div>
            <div className='grid grid-cols-10 text-left'>
              <div className='flex overflow-hidden col-span-8 mt-1 text-xs bg-[#c5eaea] rounded-md'>
                <div
                  className={`${item.percentWidth} flex flex-col justify-center text-center whitespace-nowrap bg-bar-green  bg-[#2bb9ba] shadow-none`}
                ></div>
              </div>
              <div className='col-span-2 ml-3'>
                <span className='text-sm text-[#008c8d] font-semibold text-text-green lg:text-base'>
                  {item.percent}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProgressBar;
