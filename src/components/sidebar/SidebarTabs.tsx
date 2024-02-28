import { EDITOR_ACTION_ENUM, SIDEBAR_TAB_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import React from 'react';

const SidebarTabs = () => {
  const { state, dispatch } = usePageBuilderContext();

  const renderTabs = () => {
    return [SIDEBAR_TAB_ENUM.ELEMENTS, SIDEBAR_TAB_ENUM.SETTINGS].map((tab) => {
      return (
        <div
          key={tab}
          className={`tab ${
            state.activeTab === tab ? 'text-blue-500' : ''
          } capitalize cursor-pointer`}
          onClick={() =>
            dispatch({ type: EDITOR_ACTION_ENUM.CHANGE_SIDEBAR_TAB, payload: { activeTab: tab } })
          }
        >
          {tab}
        </div>
      );
    });
  };

  return <div className='flex justify-center items-center gap-3 mb-4'>{renderTabs()}</div>;
};

export default SidebarTabs;
