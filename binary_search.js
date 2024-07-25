let nums = [2, 4, 5, 6, 8, 9, 11, 23];

function binary_search(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let n = 8;

let result = binary_search(nums, n);

if (result !== -1) {
  console.log(`Element index is ${result}`);
} else {
  console.log("Element not found");
}
