const take = (arr, n) => {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr.length < n) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  } else {
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const take = (arr, n) => {
  return arr.slice(0, n);
};
