let userName = prompt("First off, Tell me your Name?")
alert(`Oh, hello ${userName}!`)

let userPlay= confirm(` ${userName}, Do you to go on adventure?`)

  if (userPlay) {
    alert("Cool! Let's go!")
  } else {
    alert("Alright, See you later!")
  }

  let cardChoose = prompt("There are three cards. Which one would you choose Jungle, Ocean or Desert?")

  if (cardChoose === "Jungle") {
    alert("Wooho, You will live in the Treasure Temple.")
    let Jungle = prompt("What do you want to take? Gold or Diamond?")
    if(Jungle === "Gold") {
        alert("Ok best choice.")
    } else {
        alert("Shines Like Diamond")
    
    }
  } else if (cardChoose === "Ocean") {
    alert("Yikes, You'll live on island full of snakes.")
    let Ocean = prompt("You may need a weapon, sword and rope?")
    if (Ocean === "Sword") {
        alert("Thats the best choice")
    } else {
        alert("Opps...good luck")
    }
   
  } else if (cardChoose === "Desert") {
    alert("Well done! You will live in a mansion.")
    let Desert = prompt("What will you bring to your mansion? Car or Pet?")
    if (Desert === "Car") {
        alert("Thats cool")
    } else {
        alert("I like pet too.")

    }
  }

let Respond = confirm(`Wanna go for Second Round?`)
if (Respond) {
    alert("Okay! I'll bring you there.") 
    } else if ("Have A Good Day!") {
}

let SecondRound = prompt("This time you will choose animals >> Penguin , Camel , Whale?")
if (SecondRound === "Penguin") {
    alert("You go to Greenland.")
let greenLand = prompt('It must be cold, You need a jacket?')
    if (greenLand) {
        alert("You got it!")
    } else {
        alert("No Problem.")
    }
}
if (SecondRound === "Camel") {
    alert("You go to UAE.")
let UAE = prompt("It's hot there, You need a hat?")
    if (UAE) {
        alert("here you go!")
    } else {
        alert("have fun.")
    }
}
if (SecondRound === "Whale") {
    alert('You go to Seattle.')
let Seattle = prompt('Its humid out there, You need a umbrella?')
    if (Seattle) {
        alert("Stay dry!")
    } else {
        alert("Don't get wet.")
    }
}
const card = 'Number'
switch(card) {
    case 1:
    case 4:
    case 7:
    console.log(`${card} is not whale` );
    break;
    case 2:
    case 3:
    console.log(`${card} is whale`);
    break;
    case 5:
    case 6:
    case 8:
    console.log(`${card} whale , ocean`);
    break;
    default:
    console.log(`${card} neither whale , ocean`)

}

let replay = confirm('Would you like to play again?')
if(replay) {
    alert("Refresh the page")
} else {
    alert("Maybe other time.")
}
