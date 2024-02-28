import { EDITOR_ACTION_ENUM, DEFAULT_STYLES, ELEMENT_TYPE_ENUM } from '@/constants';
import { usePageBuilderContext } from '@/contexts';
import { ButtonContent, Element } from '@/interfaces';
import clsx from 'clsx';
import React from 'react';

interface Props {
  element: Element;
}

const Button = ({ element }: Props) => {
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
      style={{ ...DEFAULT_STYLES }}
      className={clsx('rounded-md relative inline-block', {
        'border-2': !state.editor.liveMode,
        'border-dashed': !state.editor.liveMode,
        'border-blue-600':
          state.editor.selectedElement?.id === element.id && !state.editor.liveMode,
      })}
      onClick={handleClick}
    >
      <button style={{ ...element.styles }}>{(element.contents as ButtonContent).innerText}</button>
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
        D
      </span>
    </div>
  );
};

export default Button;
