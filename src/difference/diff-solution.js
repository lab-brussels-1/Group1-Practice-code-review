export const difference = (array = [], values = []) => {
  if (array === !array.isArray) {
    throw new Error('this is not an array');
  }
  if (array.length === 0) {
    throw new Error('arrays shoud not be empty');
  }
  const newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray.filter((element) => !values.includes(element) === true);
};
