
// every promise needs a catch
Promise.resolve('hello')
.then(response => {
  throw new Error('something failed')
  return response
})
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err)
})