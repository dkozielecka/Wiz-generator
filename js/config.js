const startContainer = document.querySelector(".start");
export const btnBoy = document.createElement("button");
export const btnGirl = document.createElement("button");
export let flag = "girl";
btnBoy.classList.add("boy");
btnGirl.classList.add("girl");
startContainer.appendChild(btnBoy);
startContainer.appendChild(btnGirl);
btnBoy.textContent = "A Boy";
btnGirl.textContent = "A Girl";

export const answers = [
  "The perfect name for you child is",
  "In my opinion the best option is",
  "You have only one option and it is",
  "Decisively it must be"
];

export const boyClick = () => {
  if (flag === "girl") {
    flag = "boy";
  }
};

export const girlClick = () => {
  if (flag === "boy") {
    flag = "girl";
  }
};
