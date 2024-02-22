import { ELEMENT_TYPE_ENUM } from '@/constants';
import React, { useMemo } from 'react';

const Sidebar = () => {
  const elementPlaceholders = useMemo(() => {
    return [
      {
        type: ELEMENT_TYPE_ENUM.CONTAINER,
        name: 'Container',
        component: <ContainerElementPlaceHolder />,
      },
      {
        type: ELEMENT_TYPE_ENUM['2COLUMN'],
        name: 'Two Columns',
        component: <TwoColumnsElementPlaceHolder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.TEXT,
        name: 'Text',
        component: <TextElementPlaceHolder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.IMAGE,
        name: 'Image',
        component: <ImageElementPlaceHolder />,
      },
    ];
  }, []);

  return (
    <div className='w-[300px] p-2 shadow-xl shadow-gray-300 sticky top-0 right-0 h-screen flex flex-col gap-4'>
      {elementPlaceholders.map((placeholder) => {
        return <div key={placeholder.type}>{placeholder.component}</div>;
      })}
    </div>
  );
};

export const ContainerElementPlaceHolder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.CONTAINER,
        styles: {},
        contents: [],
        id: `container-${Date.now()}`,
        name: 'Container',
      }),
    );
  };

  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Container
    </div>
  );
};

export const TwoColumnsElementPlaceHolder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM['2COLUMN'],
        styles: {},
        contents: [
          {
            type: ELEMENT_TYPE_ENUM.CONTAINER,
            styles: {},
            contents: [],
            id: `container-${Date.now() + 1}`,
            name: 'Container',
          },
          {
            type: ELEMENT_TYPE_ENUM.CONTAINER,
            styles: {},
            contents: [],
            id: `container-${Date.now() + 2}`,
            name: 'Container',
          },
        ],
        id: `2col-${Date.now()}`,
        name: '2 Columns',
      }),
    );
  };

  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      2Col
    </div>
  );
};

export const TextElementPlaceHolder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.TEXT,
        styles: {},
        contents: {
          innerText: 'Text Content',
        },
        id: `text-${Date.now()}`,
        name: 'Text',
      }),
    );
  };

  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Text
    </div>
  );
};

export const ImageElementPlaceHolder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.IMAGE,
        styles: {},
        contents: {},
        id: `image-${Date.now()}`,
        name: 'Image',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Image
    </div>
  );
};

export default Sidebar;
