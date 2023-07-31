;(() => {
  fetch('http://localhost:8080/static/post.json')
    .then(res => res.json())
    .then(data => console.log(data))
})()