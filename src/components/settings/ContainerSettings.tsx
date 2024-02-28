import { EDITOR_ACTION_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import React, { useRef } from 'react';

const ContainerSettings = () => {
  const { state, dispatch } = usePageBuilderContext();
  const selectedElement = state.editor.selectedElement;
  const debounceRef = useRef<NodeJS.Timeout>();

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

  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full'>
        <label htmlFor='backgroundColor'>Background Color</label>
        <input
          className='w-full rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.backgroundColor}
          type='color'
          name='backgroundColor'
          defaultValue={selectedElement?.styles.backgroundColor}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='padding'>Padding</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.padding}
          type='string'
          name='padding'
          defaultValue={selectedElement?.styles.padding}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='margin'>Margin</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.margin}
          type='string'
          name='margin'
          defaultValue={selectedElement?.styles.margin}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='width'>Width</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.width}
          type='string'
          name='width'
          defaultValue={selectedElement?.styles.width}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='borderRadius'>Border Radius</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.borderRadius}
          type='string'
          name='borderRadius'
          defaultValue={selectedElement?.styles.borderRadius}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='borderWidth'>Border Width</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.borderWidth}
          type='string'
          name='borderWidth'
          defaultValue={selectedElement?.styles.borderWidth}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='borderStyle'>Border Style</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.borderStyle}
          type='string'
          name='borderStyle'
          defaultValue={selectedElement?.styles.borderStyle}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='borderColor'>Border Color</label>
        <input
          className='w-full rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.borderColor}
          type='color'
          name='borderColor'
          defaultValue={selectedElement?.styles.borderColor}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='display'>Display</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.display}
          type='string'
          name='display'
          defaultValue={selectedElement?.styles.display}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='flexDirection'>Flex Direction</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.flexDirection}
          type='string'
          name='flexDirection'
          defaultValue={selectedElement?.styles.flexDirection}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='justifyContent'>Justify Content</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.justifyContent}
          type='string'
          name='justifyContent'
          defaultValue={selectedElement?.styles.justifyContent}
          onChange={handleChangeStyle}
        />
      </div>

      <div className='w-full'>
        <label htmlFor='alignItems'>Align Items</label>
        <input
          className='w-full p-2 rounded-md border border-gray-200 border-solid'
          key={selectedElement?.styles.alignItems}
          type='string'
          name='alignItems'
          defaultValue={selectedElement?.styles.alignItems}
          onChange={handleChangeStyle}
        />
      </div>
    </div>
  );
};

export default ContainerSettings;
