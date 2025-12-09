// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flatRecursive(arr, depth = 1) {
  if (arr.length == 0 || depth === 0) return arr;
  let anyFlattenHappened = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Array.isArray(arr[i])) {
      arr = [...arr.slice(0, i), ...arr[i], ...arr.slice(i + 1)];
      anyFlattenHappened = true;
    }
  }
  arr = anyFlattenHappened ? flatRecursive(arr, depth - 1) : arr;
  return arr;
}

function flatItrative(arr, depth = 1) {
  while (arr.some(Array.isArray) && depth-- > 0) arr = [].concat(...arr); //concat: takes each argument and add it to the given array if its array it flatten, if we have written .conacat(arr) means we only passing one element, and all of one element get added as it is into [], unlike (1,[2],[3,[5]],4) it return [1,2,3,[5],4]
  return arr;
}
