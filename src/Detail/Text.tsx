import React from 'react';

type Option = {
  label: string, 
  value: string
}

interface TextProps {
  value?: string | string[],
  options: Option[],
}

const Text: React.FC<TextProps> = ({
  value,
  options,
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
