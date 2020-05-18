import Image from './Image';
import Tag from './Tag';
import Text from './Text';
import List from './List';
export var DetailComponents = {
  'image': Image,
  'tag': Tag,
  // @ts-ignore
  'text': Text,
  // @ts-ignore
  'list': List
};
export var setDetailComponent = function setDetailComponent(type, DetailComponent) {
  DetailComponents[type] = DetailComponent;
};