// object.keys() itterates over key value pairs
// random with specification
// input and you output


function weightedLottery(weights) {
    let myLotto = []
  
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++){
        myLotto.push(key)
      }
    });
  
    return myLotto[(Math.random() * myLotto.length) |0]
  }
  
  
  const myWeights = {
    bankrupt: 1,
    winning : 2,
    breakEven : 4,
    losing : 8,
  }
  
  weightedLottery(myWeights)