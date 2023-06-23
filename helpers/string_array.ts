export const limitText = (sentence?: string | null, limit?: number) =>
  limit
    ? sentence && sentence.length > limit
      ? sentence.slice(0, limit) + '...'
      : sentence
    : sentence;

export const firstUppercase = (word?: string | string[]) =>
  word &&
  word
    .toString()
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');

export const cleanObject = (object?: { [key: string]: string | undefined }) => {
  if (object)
    Object.keys(object).forEach((key) => {
      if (object[key] === null || object[key] === undefined) {
        delete object[key];
      }
    });
  return object;
};
