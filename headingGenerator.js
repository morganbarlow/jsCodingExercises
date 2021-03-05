function headingGenerator(phrase, num) { 
    let heading = `<h${num}>${phrase}</h${num}>`
    return heading
  }
  
  console.log(headingGenerator("Power in words",2))
  console.log(headingGenerator("Two roads diverged in the woods",1))
  console.log(headingGenerator("He had stop trying to bring her back",4))