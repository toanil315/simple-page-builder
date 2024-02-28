import { EDITOR_ACTION_ENUM, ELEMENT_TYPE_ENUM, SIDEBAR_TAB_ENUM } from '@/constants';
import {
  AddElementAction,
  DeleteElementAction,
  Editor,
  EditorAction,
  Element,
  HistoryStack,
  PageBuilderState,
  UpdateElementAction,
} from '@/interfaces';
import { ReactElement, createContext, useContext, useReducer } from 'react';

const initialEditorState: Editor = {
  selectedElement: null,
  elements: [
    {
      id: '1',
      type: ELEMENT_TYPE_ENUM.BODY,
      styles: {},
      name: 'Body',
      contents: [],
    },
  ],
  liveMode: false,
  previewMode: false,
};

const initialHistoryStack: HistoryStack = {
  editors: [initialEditorState],
  currentIndex: 0,
};

const initialState: PageBuilderState = {
  editor: initialEditorState,
  history: initialHistoryStack,
  activeTab: SIDEBAR_TAB_ENUM.ELEMENTS,
};

const addElement = (elements: Element[], action: AddElementAction) => {
  const { containerId, element } = action.payload;

  elements.forEach((el) => {
    if (el.id === containerId && Array.isArray(el.contents)) {
      el.contents.push(element);
      return;
    } else if (Array.isArray(el.contents)) return addElement(el.contents, action);
  });

  return elements;
};

const updateElement = (elements: Element[], action: UpdateElementAction) => {
  const { element } = action.payload;

  if (Array.isArray(elements)) {
    elements.forEach((el, index) => {
      if (el.id === element.id) {
        elements[index] = element;
      } else if (Array.isArray(el.contents)) return updateElement(el.contents, action);
    });
  }

  return elements;
};

const deleteElement = (elements: Element[], action: DeleteElementAction) => {
  const { element } = action.payload;

  const newElement = elements.filter((el) => {
    if (el.id === element.id) {
      return false;
    } else if (Array.isArray(el.contents) && el.contents.length > 0) {
      el.contents = deleteElement(el.contents, action);
    }
    return true;
  });

  return newElement;
};

const pageBuilderReducer = (state: PageBuilderState, action: EditorAction): PageBuilderState => {
  switch (action.type) {
    case EDITOR_ACTION_ENUM.ADD_ELEMENT: {
      let newState = {
        ...state,
        editor: {
          ...state.editor,
          elements: addElement(JSON.parse(JSON.stringify(state.editor.elements)), action),
        },
        history: JSON.parse(JSON.stringify(state.history)) as HistoryStack,
      };

      newState.history = {
        editors: [
          ...newState.history.editors.slice(0, newState.history.currentIndex + 1),
          newState.editor,
        ],
        currentIndex: newState.history.currentIndex + 1,
      };

      return newState;
    }

    case EDITOR_ACTION_ENUM.UPDATE_ELEMENT: {
      let newState = {
        ...state,
        editor: {
          ...state.editor,
          elements: updateElement(JSON.parse(JSON.stringify(state.editor.elements)), action),
        },
        history: JSON.parse(JSON.stringify(state.history)) as HistoryStack,
      };

      newState.history = {
        editors: [
          ...newState.history.editors.slice(0, newState.history.currentIndex + 1),
          newState.editor,
        ],
        currentIndex: newState.history.currentIndex + 1,
      };

      return newState;
    }

    case EDITOR_ACTION_ENUM.DELETE_ELEMENT: {
      let newState = {
        ...state,
        editor: {
          ...state.editor,
          elements: deleteElement(JSON.parse(JSON.stringify(state.editor.elements)), action),
        },
        history: JSON.parse(JSON.stringify(state.history)) as HistoryStack,
      };

      newState.history = {
        editors: [
          ...newState.history.editors.slice(0, newState.history.currentIndex + 1),
          newState.editor,
        ],
        currentIndex: newState.history.currentIndex + 1,
      };

      return newState;
    }

    case EDITOR_ACTION_ENUM.SELECT_ELEMENT: {
      if (state.editor.selectedElement?.id === action.payload.element.id) return state;

      let newState = {
        ...state,
        editor: {
          ...state.editor,
          selectedElement: action.payload.element,
        },
        activeTab: SIDEBAR_TAB_ENUM.SETTINGS,
      };

      return newState;
    }

    case EDITOR_ACTION_ENUM.UNDO: {
      if (state.history.currentIndex > 0) {
        const newState = {
          ...state,
          history: {
            currentIndex: state.history.currentIndex - 1,
            editors: [...state.history.editors],
          },
        };
        return newState;
      }

      return state;
    }

    case EDITOR_ACTION_ENUM.REDO: {
      if (state.history.currentIndex < state.history.editors.length - 1) {
        const newState = {
          ...state,
          history: {
            currentIndex: state.history.currentIndex + 1,
            editors: [...state.history.editors],
          },
        };
        return newState;
      }

      return state;
    }

    case EDITOR_ACTION_ENUM.TOGGLE_LIVE_MODE: {
      return {
        ...state,
        editor: {
          ...state.editor,
          liveMode: action.payload.liveMode,
        },
      };
    }

    case EDITOR_ACTION_ENUM.TOGGLE_PREVIEW_MODE: {
      return {
        ...state,
        editor: {
          ...state.editor,
          previewMode: action.payload.previewMode,
        },
      };
    }

    case EDITOR_ACTION_ENUM.CHANGE_SIDEBAR_TAB: {
      return {
        ...state,
        activeTab: action.payload.activeTab,
      };
    }

    default:
      return state;
  }
};

interface PageBuilderContextProps {
  state: PageBuilderState;
  dispatch: (action: EditorAction) => void;
}

const PageBuilderContext = createContext<PageBuilderContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const usePageBuilderContext = () => {
  const context = useContext(PageBuilderContext);

  if (!context) {
    throw new Error('usePageBuilderContext must be used within a PageBuilderProvider');
  }

  return context;
};

export const PageBuilderProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[] | null;
}) => {
  const [state, dispatch] = useReducer(pageBuilderReducer, initialState);

  return (
    <PageBuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </PageBuilderContext.Provider>
  );
};
