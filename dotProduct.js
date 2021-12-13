let arr1 = [3,3,2];
let arr2 = [2,6,2]

function dotProduct () {
  let product = 0
  for (let i = 0; i < arr1.length; i++){
    for (let i = 0; i < arr2.length; i++) {
      product += arr1[i] * arr2[i]
    }
  }
  if (product === 0) {
    return ("The dot product of two orthogonal vectors is zero.")
  } else {
    return ("The vectors are not orthogonal")
  }
}

console.log(dotProduct())