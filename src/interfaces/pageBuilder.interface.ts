import { ELEMENT_TYPE_ENUM } from '@/constants';

export interface TextContent {
  innerText: string;
}

export interface ImageContent {
  src: string;
  alt: string;
}

export type ElementContent = Element[] | TextContent | ImageContent;

export interface Element {
  id: string;
  type: ELEMENT_TYPE_ENUM;
  styles: Record<string, any>;
  name: string;
  contents: ElementContent;
}

export interface Editor {
  selectedElement: Element | null;
  elements: Element[];
  liveMode: boolean;
  previewMode: boolean;
}

export interface HistoryStack {
  editors: Editor[];
  currentIndex: number;
}

export interface PageBuilderState {
  editor: Editor;
  history: HistoryStack;
}

export type AddElementAction = {
  type: 'ADD_ELEMENT';
  payload: {
    element: Element;
    containerId: string;
  };
};

export type UpdateElementAction = {
  type: 'UPDATE_ELEMENT';
  payload: {
    element: Element;
  };
};

export type DeleteElementAction = {
  type: 'DELETE_ELEMENT';
  payload: {
    element: Element;
  };
};

export type SelectElementAction = {
  type: 'SELECT_ELEMENT';
  payload: {
    element: Element;
  };
};

export type UndoAction = {
  type: 'UNDO';
};

export type RedoAction = {
  type: 'REDO';
};

export type ToggleLiveModeAction = {
  type: 'TOGGLE_LIVE_MODE';
  payload: {
    liveMode: boolean;
  };
};

export type TogglePreviewModeAction = {
  type: 'TOGGLE_PREVIEW_MODE';
  payload: {
    previewMode: boolean;
  };
};

export type EditorAction =
  | AddElementAction
  | UpdateElementAction
  | DeleteElementAction
  | SelectElementAction
  | UndoAction
  | RedoAction
  | ToggleLiveModeAction
  | TogglePreviewModeAction;
