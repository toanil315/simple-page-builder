import { EDITOR_ACTION_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import { HeadingContent, ImageContent } from '@/interfaces';
import React from 'react';
import GeneralStyleSetting from './GeneralStyleSetting';

const HeadingSettings = () => {
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
        <label htmlFor='innerText'>Inner Text</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.contents as HeadingContent).innerText}
          type='string'
          name='innerText'
          defaultValue={(selectedElement?.contents as HeadingContent).innerText}
          onChange={handleChangeContent}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='as'>Heading Type</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.contents as HeadingContent).as}
          type='string'
          name='as'
          defaultValue={(selectedElement?.contents as HeadingContent).as}
          onChange={handleChangeContent}
        />
      </div>
      <hr className='my-2' />
      {selectedElement && (
        <GeneralStyleSetting
          enabledSettings={[
            'color',
            'fontSize',
            'fontWeight',
            'lineHeight',
            'letterSpacing',
            'padding',
            'margin',
            'width',
            'height',
            'display',
            'borderWidth',
            'borderStyle',
            'borderColor',
          ]}
          selectedElement={selectedElement}
          onStyleChange={handleChangeStyle}
        />
      )}
    </div>
  );
};

export default HeadingSettings;
