export const cleanObject = (object?: { [key: string]: string | undefined }) => {
  if (object)
    Object.keys(object).forEach((key) => {
      if (object[key] === null || object[key] === undefined) {
        delete object[key];
      }
    });
  return object;
};

export const removeNulls = <S>(value: S | undefined): value is S =>
  value != null;
