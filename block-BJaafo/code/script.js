// ### Write two tests for the following functions

// #### Get full name

// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
// 2. After writing the function write two tests for above function
// 3. Make first test fail to see the result of the second test

// #### Calculate total amount

// 1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
// 2. Write two tests for the above function
// 3. Make the first test fail to see the result for the second


function  getFullName(firstName='', lastName='') {
    return fullName = `${firstName} ${lastName}`
}

let result = getFullName('ravi', 'rajpoot');
 let expected = 'ravindra rajpoot';
 result = getFullName('ravi', 'singh');
 expected = 'ravi sing'

 if(result !== expected) {
     throw new Error(`${result} is not equal to ${expected}`)
 }

result = getFullName('ravindra', 'singh')
expected = "ravindra singh"


if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}



 
