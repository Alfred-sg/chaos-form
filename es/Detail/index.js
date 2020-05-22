import Image from './Image';
import Tag from './Tag';
import Text from './Text';
import List from './List';
import "./index.css";
export var DetailComponents = {
  'image': Image,
  'tag': Tag,
  'text': Text,
  'list': List
};
export var setDetailComponent = function setDetailComponent(type, DetailComponent) {
  DetailComponents[type] = DetailComponent;
};