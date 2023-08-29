export const isObjectEmpty = (obj: Object) => {
  const isEmpty = Object.keys(obj).length === 0;
  return isEmpty;
  // returns true when object is empty
};