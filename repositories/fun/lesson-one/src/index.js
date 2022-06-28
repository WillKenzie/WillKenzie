// This is a comment

// Variable types:
let variable = "string"
variableList = ["string1", "string2"]
variableObject = { "field": "data", "anotherField": "more data" }

variable = "string"

// Basic Functions
console.log("This is a string");
console.log(variable)
console.log(variableList[1])
console.log(variableObject["field"])

// Comparisons
if (variable == "string") {
  console.log("The world is okay")
}
else if (variable === 1) {
  console.log("something isn't right")
}

switch (variable) {
  case "string":
    console.log("The world is okay")
    break;

  case 1:
    console.log("Something isn't right")
    break;

  default:
    console.log("Oh no...")
}

// Loops

// Repeat 10 times
let iteration = 0
while (iteration < 10) {
  console.log(iteration)
  iteration++
}

// Repeat forever
while (true) {
  console.log("Yeeesssssss~~~")

  // This part of the program will NEVER execute

  // Instead, do this
  try {
    variable++
  }
  catch (error) {
    console.log("The obvious error happened")
  }

  // Do this even if there's no obvious error - expect the user to be stupid, or for variables to glitch, failure to do so is a security risk.

  newVariable = "this text should be replaced: to replace"
  // Also sanitize text whenever needed:
  console.log(newVariable.replace("to replace", "replaced"))

  // Here's how to do functions too,
  Thingy = (variable) => {
    console.log("Thingy was somehow called")
    console.log(variable)
  }
  Thingy()

  // Here's a more complicated class concept
  class Object {
    constructor() {
      // Set an object (well-used in classes)
      this.objectVariable = { "type": "data" }
      console.log(this.objectVariable["type"])
    }
    Function(variable) {
      // Just like a normal function
      console.log(true)
    }
  }

  const thisObject = new Object()
  thisObject.Function(1)
}