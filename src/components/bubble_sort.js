function bblSort(arr, setArr, setIndcolor) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        let a = j;
        let b = j + 1;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        let arr1 = [...arr];

        //   setTimeout(()=>setArr([...arr1]),1000);
        setTimeout(() => setIndcolor([a, b]), 1000 * i);
        setTimeout(() => setArr([...arr1]), 1000 * i);
      }
    }
  }
  // setArr([...arr]);
  // console.log(arr);
}

// This is our unsorted array
export default bblSort;
