// Iteration 1: Names and Input
//
let hacker1 = "joe";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "al";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let nameLength = (hack1, hack2) => {
  if (hack1.length > hack2.length) {
    console.log(
      `${hack1} has the longest name, it has ${hack1.length} characters`
    );
  } else if (hack1.length < hack2.length) {
    console.log(
      `${hack2} has the longest name, it has ${hack2.length} characters`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hack1.length} characters`
    );
  }
};

nameLength(hacker1, hacker2);

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

function capitalLetters(name) {
  console.log(name.toUpperCase().split("").join(" "));
}
capitalLetters(hacker1);

let capitalLetters1 = (name) => {
  console.log(name.toUpperCase().split("").join(" "));
};

capitalLetters1(hacker1);

let allCharacters = (name) => {
  console.log(name.split("").reverse().join(" "));
};

allCharacters(hacker1);

function lexicographicOrder(name1, name2) {
    newArray = [name1, name2];
    
    let first = newArray.sort()[0];
    console.log(first)
    if (first === name1 && first === name2) {
        console.log("What?! You both have the same name?");
    } else if (first === name1) {
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely.");
    }
    
}

lexicographicOrder(hacker1, hacker2);
    