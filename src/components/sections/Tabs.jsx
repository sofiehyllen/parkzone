import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TabsContent from './TabsContent';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className='w-full px-20 pb-20 '>
        {/* Venstre side - Tabs */}
        <div className='flex flex-wrap gap-2 2xl:gap-4 py-12 pt-20 border-t-1 border-gray-200'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={clsx(
                'font-h4 px-6 py-4 cursor-pointer text-marine-500 bg-sky-50 rounded-full h-fit w-fit hover:bg-marine-100',
                {
                  'bg-marine-100': activeTab === index,
                }
              )}
              onClick={() => setActiveTab(index)}>
              {tab.title}
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
