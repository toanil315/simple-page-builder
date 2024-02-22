import { Element } from '@/interfaces';
import { ELEMENT_TYPE_ENUM } from '@/constants';
import Container from './Container';
import TwoColumns from './TwoColumns';
import Text from './Text';
import Image from './Image';

interface Props {
  element: Element;
}

const Recursive = ({ element }: Props) => {
  switch (element.type) {
    case ELEMENT_TYPE_ENUM.BODY:
      return <Container element={element} />;

    case ELEMENT_TYPE_ENUM.CONTAINER:
      return <Container element={element} />;

    case ELEMENT_TYPE_ENUM['2COLUMN']:
      return <TwoColumns element={element} />;

    case ELEMENT_TYPE_ENUM.TEXT:
      return <Text element={element} />;

    case ELEMENT_TYPE_ENUM.IMAGE:
      return <Image element={element} />;

    default:
      return null;
  }
};

export default Recursive;
