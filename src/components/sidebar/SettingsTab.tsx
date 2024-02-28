import { usePageBuilderContext } from '@/contexts';
import React from 'react';
import SettingFactory from '../settings/SettingFactory';

const SettingsTab = () => {
  const { state } = usePageBuilderContext();

  return (
    <div>
      <h1 className='mb-4 font-bold text-xl text-center'>
        {state.editor.selectedElement?.name} Settings
      </h1>
      <SettingFactory />
    </div>
  );
};

export default SettingsTab;
