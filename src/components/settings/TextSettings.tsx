import { EDITOR_ACTION_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import { TextContent, TextStyleSettings } from '@/interfaces';
import React from 'react';

const TextSettings = () => {
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
    <div className='flex flex-col gap-4'>
      <div className='w-full'>
        <label htmlFor='innerText'>Inner Text</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.contents as TextContent).innerText}
          type='string'
          name='innerText'
          defaultValue={(selectedElement?.contents as TextContent).innerText}
          onChange={handleChangeContent}
        />
      </div>
      <hr className='my-2' />
      <div className='w-full'>
        <label htmlFor='color'>Color</label>
        <input
          className='w-full rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.styles as TextStyleSettings).color}
          type='color'
          name='color'
          defaultValue={(selectedElement?.styles as TextStyleSettings).color}
          onChange={handleChangeStyle}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='fontSize'>Font Size</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.styles as TextStyleSettings).fontSize}
          type='fontSize'
          name='fontSize'
          defaultValue={(selectedElement?.styles as TextStyleSettings).fontSize}
          onChange={handleChangeStyle}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='fontWeight'>Font Weight</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.styles as TextStyleSettings).fontWeight}
          type='fontWeight'
          name='fontWeight'
          defaultValue={(selectedElement?.styles as TextStyleSettings).fontWeight}
          onChange={handleChangeStyle}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='lineHeight'>Line Height</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.styles as TextStyleSettings).lineHeight}
          type='lineHeight'
          name='lineHeight'
          defaultValue={(selectedElement?.styles as TextStyleSettings).lineHeight}
          onChange={handleChangeStyle}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='letterSpacing'>Letter Spacing</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={(selectedElement?.styles as TextStyleSettings).letterSpacing}
          type='letterSpacing'
          name='letterSpacing'
          defaultValue={(selectedElement?.styles as TextStyleSettings).letterSpacing}
          onChange={handleChangeStyle}
        />
      </div>
    </div>
  );
};

export default TextSettings;
