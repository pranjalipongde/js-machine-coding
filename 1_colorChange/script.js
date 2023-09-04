const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     if (e.target.id === "red") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "green") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

// optimize solution
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.target.id;
    body.style.backgroundColor = color;
  });
});
