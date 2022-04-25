// ## Calculation Rules
// The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)

// Each input should be either a number or an operand (`+`, `-`, `*`, `/`)

// Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
//* Stringified numbers (eg. `'2'`) should be treated as numbers
//* `NULL` should be treated as zero
//* `undefined` values should be ignored
//* Empty string values (eg. `''`) should be ignored
//* Non-numeric values (eg. `'foo'`) should be ignored


// Make a function that takes an array
// find the two numbers and store them as variables
// find the operator and store it as a variable
// do the operation depending on what operator was found and save the result as a variable
// return the result variable

// how do you only pull actual numbers and the operators and how to pull null
// how do you pull another number 

const calculate = (array) => {
  let num
  let operations
  let newArray = []


  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]
    const arrayOfOperations = ['+', '-', '*', '/']

    if (arrayOfOperations.includes(currentItem)) {
      operations = currentItem

      newArray.push(operations)
    }

    if (!isNaN(parseInt(currentItem))) {
      num = parseInt(currentItem)

      newArray.push(num)
    }
    if (currentItem === null) {
      newArray.push(0)
    }
  }
  if (operations === '+') {
    return newArray[0] + newArray[2]
  }
  if (operations === '-') {
    return newArray[0] - newArray[2]
  }
  if (operations === '*') {
    return newArray[0] * newArray[2]
  }
  if (operations === '/') {
    return newArray[0] / newArray[2]
  }

  return NaN
}


module.exports = calculate

