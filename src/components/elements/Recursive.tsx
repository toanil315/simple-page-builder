import { Element } from '@/interfaces';
import { ELEMENT_TYPE_ENUM } from '@/constants';
import Container from './Container';
import TwoColumns from './TwoColumns';
import Text from './Text';
import Image from './Image';
import LineBreak from './LineBreak';
import Button from './Button';
import Row from './Row';
import Column from './Column';
import Link from './Link';
import Heading from './Heading';

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

    case ELEMENT_TYPE_ENUM.HR:
      return <LineBreak element={element} />;

    case ELEMENT_TYPE_ENUM.BUTTON:
      return <Button element={element} />;

    case ELEMENT_TYPE_ENUM.ROW:
      return <Row element={element} />;

    case ELEMENT_TYPE_ENUM.COLUMN:
      return <Column element={element} />;

    case ELEMENT_TYPE_ENUM.LINK:
      return <Link element={element} />;

    case ELEMENT_TYPE_ENUM.HEADING:
      return <Heading element={element} />;

    default:
      return null;
  }
};

export default Recursive;
