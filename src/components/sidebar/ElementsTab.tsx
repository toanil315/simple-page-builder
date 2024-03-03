import { ELEMENT_TYPE_ENUM } from '@/constants';
import { ButtonContent, HeadingContent, ImageContent, LinkContent } from '@/interfaces';
import React, { useMemo } from 'react';

const ElementsTab = () => {
  const elementPlaceholders = useMemo(() => {
    return [
      {
        type: ELEMENT_TYPE_ENUM.CONTAINER,
        name: 'Container',
        component: <ContainerElementPlaceHolder />,
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
      {
        type: ELEMENT_TYPE_ENUM.HR,
        name: 'Hr',
        component: <HrPlaceholder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.BUTTON,
        name: 'Button',
        component: <ButtonPlaceholder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.ROW,
        name: 'Row',
        component: <RowPlaceholder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.COLUMN,
        name: 'Column',
        component: <ColumnPlaceholder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.HEADING,
        name: 'Heading',
        component: <HeadingPlaceholder />,
      },
      {
        type: ELEMENT_TYPE_ENUM.LINK,
        name: 'Link',
        component: <LinkPlaceholder />,
      },
    ];
  }, []);

  return (
    <div className='flex flex-col gap-4'>
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
        contents: {
          src: 'https://placehold.jp/150x150.png',
          alt: 'image placeholder',
        } as ImageContent,
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

export const HrPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.HR,
        styles: {},
        contents: {},
        id: `hr-${Date.now()}`,
        name: 'Hr',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Hr
    </div>
  );
};

export const ButtonPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.BUTTON,
        styles: {},
        contents: { innerText: 'Button' } as ButtonContent,
        id: `button-${Date.now()}`,
        name: 'Button',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Button
    </div>
  );
};

export const RowPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.ROW,
        styles: {},
        contents: [],
        id: `row-${Date.now()}`,
        name: 'Row',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Row
    </div>
  );
};

export const ColumnPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.COLUMN,
        styles: {},
        contents: [],
        id: `column-${Date.now()}`,
        name: 'Column',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Column
    </div>
  );
};

export const HeadingPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.HEADING,
        styles: {},
        contents: {
          innerText: 'Heading Content',
          as: 'h1',
        } as HeadingContent,
        id: `heading-${Date.now()}`,
        name: 'Heading',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Heading
    </div>
  );
};

export const LinkPlaceholder = () => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'element',
      JSON.stringify({
        type: ELEMENT_TYPE_ENUM.HEADING,
        styles: {},
        contents: {
          innerText: 'Link Content',
          href: '#',
        } as LinkContent,
        id: `link-${Date.now()}`,
        name: 'Link',
      }),
    );
  };
  return (
    <div
      className='h-10 py-2 px-4 bg-gray-100 rounded-md border border-gray-400 border-solid'
      draggable
      onDragStart={onDragStart}
    >
      Link
    </div>
  );
};

export default ElementsTab;
