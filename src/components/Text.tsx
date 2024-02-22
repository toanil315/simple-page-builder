import { usePageBuilderContext } from '@/contexts';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { EDITOR_ACTION_ENUM, DEFAULT_STYLES } from '@/constants';
import { Element, TextContent } from '@/interfaces';

interface Props {
  element: Element;
}

const Text = ({ element }: Props) => {
  const { state, dispatch } = usePageBuilderContext();
  const debounceRef = useRef<NodeJS.Timeout>();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: EDITOR_ACTION_ENUM.SELECT_ELEMENT,
      payload: {
        element,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const updatedElement = {
      ...element,
      contents: {
        ...element.contents,
        innerText: e.target.innerText,
      },
    };

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      dispatch({
        type: EDITOR_ACTION_ENUM.UPDATE_ELEMENT,
        payload: {
          element: updatedElement,
        },
      });
    }, 300);
  };

  return (
    <div
      style={{ ...DEFAULT_STYLES, ...element.styles }}
      className={clsx('rounded-md relative h-fit relative', {
        'border-2': !state.editor.liveMode,
        'border-dashed': !state.editor.liveMode,
        'border-blue-600':
          state.editor.selectedElement?.id === element.id && !state.editor.liveMode,
      })}
      onClick={handleClick}
    >
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={handleChange}
      >
        {(element.contents as TextContent).innerText}
      </div>

      <span
        className={clsx(
          'absolute top-0 transform -translate-y-1/2 left-2 px-2 font-medium text-white text-xs bg-blue-200 rounded-md z-50',
          {
            '!block': !state.editor.liveMode && state.editor.selectedElement?.id === element.id,
            'bg-blue-500':
              state.editor.selectedElement?.id === element.id && !state.editor.liveMode,
          },
        )}
      >
        {element.name}
      </span>
    </div>
  );
};

export default Text;
