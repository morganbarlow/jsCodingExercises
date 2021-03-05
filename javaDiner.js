const ourMenu = {
    entree : {
      "Hamburger": {
        name : "Hamburger",
        price : "3.00",
      },
      "Cheeseburger" : {
        name : "Cheeseburger",
      price : "3.25",
      },
      "Hot Dog": {
        name : "Hot Dog",
        price : "2.70"
      }
    },
  
    side : {
      "Fries" : {
        name: "Fries",
        price : "1.00",
      },
      "Cheese Fries" : {
        name: "Cheese Fries",
        price : "1.50",
      },
      "Onion Rings" : {
        name: "Onion Rings",
        price : "2.00",
      },
    }
  }
  
  let bill = 0
  
  function seeMenu (menu) {
    Object.values(menu).forEach (menuItem => console.log(`${menuItem.name} ~ ${menuItem.price}`))
  }
  
  function menuChoice(menu, question) {
    const waiterQA = prompt(question)
  
    Object.values(menu).forEach(menuItem => {
      if (waiterQA.toLowerCase() === menuItem.name.toLowerCase()) {
        console.log(`Lovely, that will be $${menuItem.price}\n\n`)
        bill += parseFloat(menuItem.price)
      }
    })
  }
  
  seeMenu(ourMenu.entree)
  menuChoice(ourMenu.entree, "\n Hi what can I get started for you?\n")
  
  seeMenu(ourMenu.side)
  menuChoice(ourMenu.side, "\n And for the first side?\n") 
  
  seeMenu(ourMenu.side)
  menuChoice(ourMenu.side, "\n Alright, and for the last?\n")
  
  console.log(`Perfect, your total this evening will be $${bill.toFixed(2)}`)