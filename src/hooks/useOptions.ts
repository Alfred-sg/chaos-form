import { useState, useEffect } from 'react';

export interface Option {
  label: string;
  value: string;
  [key: string]: any;
}

export type Options = Option[] | (() => Promise<Option[]>);

export default (options: undefined | Options) => {
  const [innerOptions, setInnerOptions] = useState(Array.isArray(options) ? options : []);
  if (typeof options === 'function'){
    useEffect(() => {
      options().then((data) => {
        setInnerOptions(data);
      });
    }, [options]);
  };

  return {
    options: innerOptions,
    setOptions: setInnerOptions,
  };
};