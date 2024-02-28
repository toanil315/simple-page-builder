import React, { useState } from 'react';
import SidebarTabs from './SidebarTabs';
import ElementsTab from './ElementsTab';
import SettingsTab from './SettingsTab';
import { usePageBuilderContext } from '@/contexts';
import { SIDEBAR_TAB_ENUM } from '@/constants';

const Sidebar = () => {
  const { state } = usePageBuilderContext();

  return (
    <div className='w-[350px] p-2 shadow-xl shadow-gray-300 sticky top-0 right-0 h-screen flex flex-col gap-4 overflow-y-scroll'>
      <SidebarTabs />
      {state.activeTab === SIDEBAR_TAB_ENUM.ELEMENTS && <ElementsTab />}
      {state.activeTab === SIDEBAR_TAB_ENUM.SETTINGS && <SettingsTab />}
    </div>
  );
};

export default Sidebar;
