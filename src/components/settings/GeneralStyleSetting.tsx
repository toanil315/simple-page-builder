import { Element } from '@/interfaces';
import React, { useMemo } from 'react';

type StyleSetting =
  | 'backgroundColor'
  | 'padding'
  | 'margin'
  | 'width'
  | 'borderRadius'
  | 'borderWidth'
  | 'borderStyle'
  | 'borderColor'
  | 'display'
  | 'flexDirection'
  | 'justifyContent'
  | 'alignItems'
  | 'color'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'textAlign'
  | 'letterSpacing'
  | 'height'
  | 'objectFit'
  | 'boxShadow';

interface Props {
  enabledSettings: StyleSetting[];
  selectedElement: Element;
  onStyleChange: (e: React.ChangeEvent<any>) => void;
}

const GeneralStyleSetting = ({ enabledSettings, selectedElement, onStyleChange }: Props) => {
  const setOfCssSettings = useMemo(() => {
    return new Set(enabledSettings);
  }, []);

  return (
    <>
      {setOfCssSettings.has('backgroundColor') && (
        <div className='w-full'>
          <label htmlFor='backgroundColor'>Background Color</label>
          <input
            className='w-full rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.backgroundColor}
            type='color'
            name='backgroundColor'
            defaultValue={selectedElement?.styles.backgroundColor}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('padding') && (
        <div className='w-full'>
          <label htmlFor='padding'>Padding</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.padding}
            type='string'
            name='padding'
            defaultValue={selectedElement?.styles.padding}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('margin') && (
        <div className='w-full'>
          <label htmlFor='margin'>Margin</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.margin}
            type='string'
            name='margin'
            defaultValue={selectedElement?.styles.margin}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('width') && (
        <div className='w-full'>
          <label htmlFor='width'>Width</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.width}
            type='string'
            name='width'
            defaultValue={selectedElement?.styles.width}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('height') && (
        <div className='w-full'>
          <label htmlFor='height'>Height</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.height}
            type='string'
            name='height'
            defaultValue={selectedElement?.styles.height}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('borderRadius') && (
        <div className='w-full'>
          <label htmlFor='borderRadius'>Border Radius</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.borderRadius}
            type='string'
            name='borderRadius'
            defaultValue={selectedElement?.styles.borderRadius}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('borderWidth') && (
        <div className='w-full'>
          <label htmlFor='borderWidth'>Border Width</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.borderWidth}
            type='string'
            name='borderWidth'
            defaultValue={selectedElement?.styles.borderWidth}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('borderStyle') && (
        <div className='w-full'>
          <label htmlFor='borderStyle'>Border Style</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.borderStyle}
            type='string'
            name='borderStyle'
            defaultValue={selectedElement?.styles.borderStyle}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('borderColor') && (
        <div className='w-full'>
          <label htmlFor='borderColor'>Border Color</label>
          <input
            className='w-full rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.borderColor}
            type='color'
            name='borderColor'
            defaultValue={selectedElement?.styles.borderColor}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('display') && (
        <div className='w-full'>
          <label htmlFor='display'>Display</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.display}
            type='string'
            name='display'
            defaultValue={selectedElement?.styles.display}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('flexDirection') && (
        <div className='w-full'>
          <label htmlFor='flexDirection'>Flex Direction</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.flexDirection}
            type='string'
            name='flexDirection'
            defaultValue={selectedElement?.styles.flexDirection}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('justifyContent') && (
        <div className='w-full'>
          <label htmlFor='justifyContent'>Justify Content</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.justifyContent}
            type='string'
            name='justifyContent'
            defaultValue={selectedElement?.styles.justifyContent}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('alignItems') && (
        <div className='w-full'>
          <label htmlFor='alignItems'>Align Items</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.alignItems}
            type='string'
            name='alignItems'
            defaultValue={selectedElement?.styles.alignItems}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('color') && (
        <div className='w-full'>
          <label htmlFor='color'>Color</label>
          <input
            className='w-full rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.color}
            type='color'
            name='color'
            defaultValue={selectedElement?.styles.color}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('fontSize') && (
        <div className='w-full'>
          <label htmlFor='fontSize'>Font Size</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.fontSize}
            type='string'
            name='fontSize'
            defaultValue={selectedElement?.styles.fontSize}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('fontWeight') && (
        <div className='w-full'>
          <label htmlFor='fontWeight'>Font Weight</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.fontWeight}
            type='string'
            name='fontWeight'
            defaultValue={selectedElement?.styles.fontWeight}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('lineHeight') && (
        <div className='w-full'>
          <label htmlFor='lineHeight'>Line Height</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.lineHeight}
            type='string'
            name='lineHeight'
            defaultValue={selectedElement?.styles.lineHeight}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('textAlign') && (
        <div className='w-full'>
          <label htmlFor='textAlign'>Text Align</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.textAlign}
            type='string'
            name='textAlign'
            defaultValue={selectedElement?.styles.textAlign}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('letterSpacing') && (
        <div className='w-full'>
          <label htmlFor='letterSpacing'>Letter Spacing</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.letterSpacing}
            type='string'
            name='letterSpacing'
            defaultValue={selectedElement?.styles.letterSpacing}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('objectFit') && (
        <div className='w-full'>
          <label htmlFor='objectFit'>Object Fit</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.objectFit}
            type='string'
            name='objectFit'
            defaultValue={selectedElement?.styles.objectFit}
            onChange={onStyleChange}
          />
        </div>
      )}
      {setOfCssSettings.has('boxShadow') && (
        <div className='w-full'>
          <label htmlFor='boxShadow'>Box Shadow</label>
          <input
            className='w-full p-2 rounded-md border border-gray-200 border-solid'
            key={selectedElement?.styles.boxShadow}
            type='string'
            name='boxShadow'
            defaultValue={selectedElement?.styles.boxShadow}
            onChange={onStyleChange}
          />
        </div>
      )}
    </>
  );
};

export default GeneralStyleSetting;
