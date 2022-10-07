const burger = document.querySelector("#burger-img");
const menu = document.querySelector("#menu");

burger.addEventListener("click" , () => {
  menu.classList.toggle("disp");
});
