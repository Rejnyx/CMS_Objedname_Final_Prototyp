import React, { useState, type ReactNode } from 'react';

interface TabsProps {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-neutral-100 rounded-xl p-1 flex w-full items-center gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`h-12 px-5 py-3 rounded-lg flex flex-1 justify-center items-center gap-2.5 text-base font-semibold transition-colors duration-200 focus:outline-none ${
              activeTab === index
                ? 'text-white shadow'
                : 'bg-white text-neutral-800 outline outline-2 outline-offset-[-2px] outline-neutral-200 hover:bg-neutral-200'
            }`}
            style={activeTab === index ? { backgroundColor: '#FF6C1E' } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6 flex-1 overflow-y-auto">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
