import Image from './Image';
import Tag from './Tag';
import Text from './Text';
import List from './List';
import './index.less';

export const DetailComponents: {
  [key: string]: React.FunctionComponent<any> | React.ClassicComponent<any>;
} = {
  'image': Image,
  'tag': Tag,
  'text': Text,
  'list': List,
}

export const setDetailComponent = (
  type: string, 
  DetailComponent: React.FunctionComponent | React.ClassicComponent
) => {
  DetailComponents[type] = DetailComponent;
}