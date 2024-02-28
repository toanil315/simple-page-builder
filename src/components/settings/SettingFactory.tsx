import { ELEMENT_TYPE_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import React from 'react';
import ContainerSettings from './ContainerSettings';
import TextSettings from './TextSettings';
import ImageSettings from './ImageSetting';

const SettingFactory = () => {
  const { state } = usePageBuilderContext();

  switch (state.editor.selectedElement?.type) {
    case ELEMENT_TYPE_ENUM.BODY: {
      return <ContainerSettings />;
    }

    case ELEMENT_TYPE_ENUM.CONTAINER: {
      return <ContainerSettings />;
    }

    case ELEMENT_TYPE_ENUM.TEXT: {
      return <TextSettings />;
    }

    case ELEMENT_TYPE_ENUM.IMAGE: {
      return <ImageSettings />;
    }

    default: {
      return null;
    }
  }
};

export default SettingFactory;
