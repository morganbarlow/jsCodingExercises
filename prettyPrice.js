function prettyPrice (salePrice, saleTax) {
    const flatPrice = Math.floor(salePrice)
    
    if (saleTax > 1){
      saleTax *=  .01
    }
  
    return flatPrice + saleTax
  }
  
  // Jordan's Code
  // const prettyPrice = (grossPrice, extension) => {
  //     if (Number.isInteger(extension)) {
  //         extension = extension * 0.01;
  //     }
  //     return Math.floor(grossPrice) + extension;
  // }
  
  console.log(prettyPrice(3.57, .95))
  console.log(prettyPrice(3.57, 95))
  console.log(prettyPrice(100.03, 78))
  console.log(prettyPrice(19.20, 65))
  console.log(prettyPrice(4.01, 20))