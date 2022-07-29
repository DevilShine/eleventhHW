// task 1 -------------------------------

// var elems = document.querySelectorAll(".zzz");

// elems.forEach(function (elem, i) {
//   elem.innerHTML = i + 1;
// });

// task 2 -------------------------------

// var elems = document.querySelectorAll("h2, p");

// elems.forEach(function (elem) {
//   var find = elem.innerHTML
//   if (find.includes("www")) {
//     elem.classList.add("blue")
//   }
// });

// task 3 -------------------------------

var elems = document.querySelectorAll(".zzz");
var ul = document.createElement("ul");

elems.forEach(function (e, i) {
  var li = document.createElement("li");
  li.classList.add(i);
  li.innerHTML = e.innerHTML;
  ul.append(li)
});
document.querySelector(".zzz").before(ul)