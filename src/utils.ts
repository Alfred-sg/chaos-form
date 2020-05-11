export const extract = (source: { [key: string]: any }, keys: string[]) => {
  const result: { [key: string]: any } = {};

  keys.forEach(key => {
    if (key in source){
      result[key] = source[key];
    };
  });

  return result;
}