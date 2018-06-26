
  
  function sortArray(array) {
   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);  // sorted array of odd numbers [1,3,5]
   return array.map((x) => x % 2 ? odd.shift() : x); //new array checks if the original array element is odd 
                                                     //and if its true shift elements form the sorted odd array. 
  
}
