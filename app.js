const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.getElementById("color-element");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(color);
});
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
