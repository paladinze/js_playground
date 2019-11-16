(async function() {
  try {
    await Promise.resolve('hello')
    await Promise.reject('something wrong')
  } catch(e) {
    console.log(e)
  }
  console.log('will do something next')
})()