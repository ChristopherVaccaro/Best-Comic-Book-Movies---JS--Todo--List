let dcMovies = ["batman", "superman", "justice league"];
let marvelMovies = ["avengers", "captain america", "x-men"];
combinedMovies = [...dcMovies, "spawn", ...marvelMovies];

var ul = document.createElement("ul");
ul.className = "comicBookList";
document.getElementById("combinedMoviesContainer").appendChild(ul);

combinedMovies.forEach(function(movie) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += movie;
});

var addMovieBtn = document.getElementById("addMovieBtn");
var inputField = document.getElementById("movieTextInputField");

function addMovieFunction() {
  if (inputField && inputField.value) {
    combinedMovies.push(inputField.value);
    updateList();
    inputField.value = "";
  } else {
    alert("add something");
  }
}

function updateList() {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += inputField.value;
}

//inputField.addEventListener("keyup", function(event) {
// event.preventDefault();

// if (event.keyCode === 13) {
//     addMovieBtn.click();
//   }
// });
