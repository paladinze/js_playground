// syntaic sugar over async await

const fetch = require("node-fetch");
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos"
];

const getData1 = async function() {
  try {
    const [users, photos, todos] = await Promise.all(
      urls.map(url => fetch(url).then(data => data.json()))
    );
    console.log("users", users.length);
    console.log("photos", photos.length);
    console.log("todos", todos.length);
  } catch(e) {
    console.log(e)
  }
};

// es9 syntax: for await of
const getData2 = async function() {
  try {
    const arrOfPromises = urls.map(url => fetch(url))
    for await (let req of arrOfPromises) {
      let data = await req.json()
      console.log(data.length)
    }
  } catch(e) {
    console.log(e)
  }
};
getData2()