import React from 'react';
import './index.less';

type Option = {
  label: string, 
  value: string
}

const Text = ({
  value,
  options,
}: {
  value?: string | string[],
  options: Option[],
}) => {
  let texts: string[] = Array.isArray(value) ? value : value ? [value] : [];
  if (options && options.length){
    texts = texts.map(item => {
      const found = options.find(option => option.value === item);
      return found ? found.label : item;
    });
  };

  return (
    <span className="chaos-form-detail-text">
      {Array.isArray(texts) ? texts.join(',') : texts}
    </span>
  )
}

export default Text;
