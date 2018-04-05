const arrayOfNums = [1,2,3,4];
const people = [
  {
    name: 'austen',
    age: 23
  },
  {
    name: 'autumn',
    age: 29
  }
]

const sum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
