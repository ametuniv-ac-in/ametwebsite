import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface ProgramTab {
  id: string;
  name: string;
}
interface ProgramTabsProps {
  tabs: ProgramTab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  curriculumLink: string;
}
const ProgramTabs: React.FC<ProgramTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  curriculumLink
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-32">
      <div className="p-4 bg-aemet-navy text-white font-medium">
        Program Information
      </div>
      <div className="divide-y">
        {tabs.map(tab => <button key={tab.id} className={cn("w-full text-left px-4 py-3 flex items-center text-sm transition-colors", activeTab === tab.id ? "bg-aemet-lightGray font-medium text-aemet-navy" : "hover:bg-gray-50 text-gray-600")} onClick={() => setActiveTab(tab.id)}>
            {tab.name}
            <ChevronRight className={cn("ml-auto h-4 w-4 transition-transform", activeTab === tab.id && "rotate-90")} />
          </button>)}
        
      </div>
    </div>;
};
import { FileDown, ExternalLink } from 'lucide-react';
export default ProgramTabs;