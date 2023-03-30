var mybody = document.getElementById("data") ?? document.createElement('data');
console.log("before")
fetch('http://jsonplaceholder.typicode.com/users ')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach((repo: any) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${repo.username}</td>
        <td>${repo.email}</td>
        <td>${repo.website}</td>
      `;
      mybody.appendChild(tr);
    });
  });
  console.log("after")
//   😊😂