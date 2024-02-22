import { usePageBuilderContext } from '@/contexts';
import Recursive from './Recursive';

const Editor = () => {
  const { state } = usePageBuilderContext();

  const renderElements = () => {
    return state.editor.elements.map((element, index) => {
      return (
        <Recursive
          key={index}
          element={element}
        />
      );
    });
  };

  return <div className='flex-grow'>{renderElements()}</div>;
};

export default Editor;
