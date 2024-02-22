import { Element } from '@/interfaces';
import Recursive from './Recursive';
import { clsx } from 'clsx';
import { usePageBuilderContext } from '@/contexts';
import { EDITOR_ACTION_ENUM, ELEMENT_TYPE_ENUM, DEFAULT_STYLES } from '@/constants';

interface Props {
  element: Element;
}

const TwoColumns = ({ element }: Props) => {
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

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ ...DEFAULT_STYLES, ...element.styles }}
      className={clsx('w-full min-h-[100px] rounded-md relative flex', {
        'h-full': element.type === ELEMENT_TYPE_ENUM.BODY,
        'h-fit': element.type === ELEMENT_TYPE_ENUM.CONTAINER,
        'border-2': !state.editor.liveMode,
        'border-gray-400': !state.editor.liveMode,
        'border-dashed': !state.editor.liveMode,
        'border-blue-500':
          element.type === ELEMENT_TYPE_ENUM.CONTAINER &&
          state.editor.selectedElement?.id === element.id &&
          !state.editor.liveMode,
      })}
      onClick={handleClick}
      onDragOver={handleOnDragOver}
    >
      {Array.isArray(element.contents) &&
        element.contents.map((el) => (
          <Recursive
            key={el.id}
            element={el}
          />
        ))}

      <span
        className={clsx(
          'absolute top-0 transform -translate-y-1/2 left-2 px-2 font-medium text-white text-xs bg-blue-200 rounded-md z-50',
          {
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

export default TwoColumns;
