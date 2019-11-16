// types of error: Error, SyntaxError, ReferenceError
// error catcher will be checked through the call stack
// if no error catcher is found, then browser/node shows uncaught error

// properties of an error object
const myError = new Error('Hello my friend')
console.log(myError.name)
console.log(myError.message)
console.log(myError.stack)

// try catch
function demoFail() {
  try {
    console.log('this will not work!')
    throw new Error('some error occurs')
  } catch(error) {
    console.log(error.message)
  }
}
demoFail()

