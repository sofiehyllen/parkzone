import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TabsContent from './TabsContent';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  return (
    <>
      <div className='w-full pb-28 '>
        {/* Øverst - Tabs */}
        <div className='flex flex-wrap gap-2 2xl:gap-4 pb-7 md:pb-5 px-5 md:px-20 3xl:px-40'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={clsx(
                'font-h5 font-medium md:font-h4 px-6 py-4 cursor-pointer  bg-sky-50 rounded-full h-fit w-fit hover:bg-marine-100',
                { 'bg-marine-100': activeTab === index && tab }
              )}
              onClick={() => setActiveTab(index)}>
              <p className='text-marine-500'>{tab.title}</p>
            </div>
          ))}
        </div>

        {/* Højre side - Content */}
        <div className='w-full'>
          {tabs.map((tab, index) => (
            <div key={index} className={clsx({ hidden: activeTab !== index })}>
              <TabsContent content={tab.content}></TabsContent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  content: PropTypes.array,
};
