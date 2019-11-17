// Promise is used to handle async operations
// three possible states: pending, resolved, rejected
const fetch = require('node-fetch')
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/todos',
]

Promise.all(
  urls.map(url => fetch(url).then(res => res.json()))
).then(result => console.log(result))
.catch(e => console.log(e))