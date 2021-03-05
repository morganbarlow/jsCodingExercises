// function that takes in a base number, and "to the power of" number.
// I need to use multiplication * and the reduce function (there are other ways, but don't use outside Libs)
// I whatever my power number is, that is how many times my base number needs to multiply by itself

function manualExponent(base, power) {
  const rule = Array(power).fill(base)  //Array() is constructing your array with (power) number of spaces, .fill() is filling every spot with (static) number
  const regulation = (total, nextValue) => total * nextValue
  return rule.reduce(regulation)
}

// function manualExponent(base,power) {
//     for ()
// }
  
  
  
  console.log(manualExponent(3,2))
  console.log(manualExponent(5,3))
  console.log(manualExponent(1,7))
  console.log(manualExponent(10,9))