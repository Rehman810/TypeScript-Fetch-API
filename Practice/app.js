var _a;
var mybody = (_a = document.getElementById("data")) !== null && _a !== void 0 ? _a : document.createElement('data');
console.log("before");
fetch('http://jsonplaceholder.typicode.com/users ')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
    data.forEach(function (repo) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(repo.username, "</td>\n        <td>").concat(repo.email, "</td>\n        <td>").concat(repo.website, "</td>\n      ");
        mybody.appendChild(tr);
    });
});
console.log("after");
//   😊😂
