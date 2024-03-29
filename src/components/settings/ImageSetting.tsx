import { EDITOR_ACTION_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import { ImageContent } from '@/interfaces';
import React from 'react';
import GeneralStyleSetting from './GeneralStyleSetting';

const ImageSettings = () => {
  const { state, dispatch } = usePageBuilderContext();
  const { selectedElement } = state.editor;
  const debounceRef = React.useRef<NodeJS.Timeout>();

  const handleChangeStyle = (e: React.ChangeEvent<any>) => {
    if (selectedElement) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        selectedElement.styles = {
          ...selectedElement.styles,
          [e.target.name]: e.target.value,
        };
        dispatch({
          type: EDITOR_ACTION_ENUM.UPDATE_ELEMENT,
          payload: {
            element: selectedElement,
          },
        });
      }, 500);
    }
  };

  const handleChangeContent = (e: React.ChangeEvent<any>) => {
    if (selectedElement) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        selectedElement.contents = {
          ...selectedElement.contents,
          [e.target.name]: e.target.value,
        };
        dispatch({
          type: EDITOR_ACTION_ENUM.UPDATE_ELEMENT,
          payload: {
            element: selectedElement,
          },
        });
      }, 500);
    }
  };

  return (
    <div className='flex flex-col gap-4 pt-2 pb-4'>
      <div className='w-full'>
        <label htmlFor='src'>Image Source</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.contents as ImageContent).src}
          type='string'
          name='src'
          defaultValue={(selectedElement?.contents as ImageContent).src}
          onChange={handleChangeContent}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='alt'>Alt</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.contents as ImageContent).alt}
          type='string'
          name='alt'
          defaultValue={(selectedElement?.contents as ImageContent).alt}
          onChange={handleChangeContent}
        />
      </div>
      <hr className='my-2' />
      {selectedElement && (
        <GeneralStyleSetting
          enabledSettings={['display', 'padding', 'margin', 'width', 'height', 'objectFit']}
          selectedElement={selectedElement}
          onStyleChange={handleChangeStyle}
        />
      )}
    </div>
  );
};

export default ImageSettings;
