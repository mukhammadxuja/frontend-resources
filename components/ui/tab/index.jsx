import { useCardContext } from 'context/cardContext';
import React, { useEffect, useRef, useState } from 'react';

function Tab({ data }) {
  const { setCardTag, cardTag, colorVariants } = useCardContext();

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const handleTab = (title, index) => {
    setCardTag(title);
    setActiveTabIndex(index);
  };
  return (
    <div className="flew-row relative flex h-12 text-sm font-medium text-black after:rounded-full">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-full bg-black text-white after:rounded-full" />
      </span>
      {data?.map((tab, index) => {
        const isActive = activeTabIndex === index;
        return (
          <button
            onClick={() => handleTab(tab.title, index)}
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `text-white dark:text-black` : `text-gray-500`
            } hover:text-muted my-1.5 flex cursor-pointer select-none items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-center text-[16px] font-semibold leading-[1.3em] tracking-[-0.1px] duration-300`}
          >
            <span style={{ color: tab?.color }}>
              {tab?.icon}
            </span>
            <span>{tab.title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Tab;
