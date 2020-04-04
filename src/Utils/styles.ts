export const toStyleVarFromKey = (key: string, prefix = '') =>
  [...key].reduce((ac, cv) => {
    let value = cv;
    if (cv === cv.toUpperCase()) {
      value = `-${cv.toLowerCase()}`;
    }
    return `${ac}${value}`;
  }, `--${prefix ? `${prefix}-` : ''}`);

export const toKeyFromStyleVar = (variable: string) =>
  variable
    .slice(2)
    .replace(/-([a-z]){0}\w/g, (value) => value.toUpperCase().slice(1));

export const toVariables = (value: object, prefix = '', unit = '') =>
  Object.keys(value).reduce(
    (ac, cv: string) => ({
      ...ac,
      [toStyleVarFromKey(cv, prefix)]: value[cv as keyof typeof value] + unit
    }),
    {}
  );

export const toGetVariables = <T>(value: T, prefix = '') =>
  Object.keys(value).reduce(
    (ac: T, cv) => ({
      ...ac,
      [cv]: `var(${toStyleVarFromKey(cv, prefix)})`
    }),
    {} as T
  );
