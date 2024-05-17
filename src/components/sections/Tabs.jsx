import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import TabsContent from "./TabsContent";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  return (
    <>
      <div className="w-full pb-28 ">
        {/* Øverst - Tabs */}
        <div className="mx-auto flex max-w-screen-xl flex-wrap gap-2 px-5 pb-7 md:px-20 md:pb-5 xl:gap-3 xl:px-32 2xl:px-20 ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={clsx(
                "relative h-fit w-fit cursor-pointer rounded-full bg-sky-50 px-6 py-4 hover:bg-marine-100",
                { "bg-marine-100": activeTab === index },
              )}
              onClick={() => setActiveTab(index)}
            >
              <p className="font-h5 text-marine-500">{tab.title}</p>
              {tab.title === "Security" ? (
                <span className="absolute right-0 top-0">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400"></span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        {/* Højre side - Content */}
        <div className="w-full">
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
