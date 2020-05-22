import { useState, useEffect } from 'react';

export interface Option {
  label: string;
  value: string;
  [key: string]: any;
}

export type Options = Option[] | (() => Promise<Option[]>);

export default (options: undefined | Options) => {
  const [innerOptions, setInnerOptions] = useState(Array.isArray(options) ? options : []);
  
  useEffect(() => {
    if (typeof options === 'function'){
      options().then((data) => {
        setInnerOptions(data);
      });
    } else if (Array.isArray(options)) {
      setInnerOptions(options);
    }
  }, [options]);

  return {
    options: innerOptions,
    setOptions: setInnerOptions,
  };
};