import { usePageBuilderContext } from '@/contexts';
import clsx from 'clsx';
import React from 'react';
import { EDITOR_ACTION_ENUM, DEFAULT_STYLES, ELEMENT_TYPE_ENUM } from '@/constants';
import { Element, TextContent } from '@/interfaces';

interface Props {
  element: Element;
}

const Text = ({ element }: Props) => {
  const { state, dispatch } = usePageBuilderContext();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: EDITOR_ACTION_ENUM.SELECT_ELEMENT,
      payload: {
        element,
      },
    });
  };

  const handleDelete = () => {
    dispatch({ type: EDITOR_ACTION_ENUM.DELETE_ELEMENT, payload: { element } });
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
      <p> {(element.contents as TextContent).innerText}</p>
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

      <span
        className={clsx(
          'absolute top-0 transform -translate-y-1/2 right-2 px-2 font-medium text-white text-xs bg-blue-200 rounded-md z-50 cursor-pointer hidden',
          {
            '!block':
              !state.editor.liveMode &&
              state.editor.selectedElement?.id === element.id &&
              element.type !== ELEMENT_TYPE_ENUM.BODY,
            'bg-red-400': state.editor.selectedElement?.id === element.id && !state.editor.liveMode,
          },
        )}
        onClick={handleDelete}
      >
        Delete
      </span>
    </div>
  );
};

export default Text;
