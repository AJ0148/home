const num = document.getElementById("number");
const btn = document.getElementById("gen");

const randomNum = () => {
  return Math.floor(Math.random() * 10);
};

btn.addEventListener("click", () => {
  num.innerHTML = randomNum();
});