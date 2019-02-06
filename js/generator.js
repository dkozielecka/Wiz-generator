import { flag, answers } from "./config.js";
import { boysNames, girlsNames } from "./names.js";

const answer = document.querySelector(".answer");
const name = document.querySelector(".name");
export const generator = function() {
  if (flag === "male") {
    let boyName = boysNames[Math.floor(Math.random() * boysNames.length)];
    answer.textContent = `${answers[Math.floor(Math.random() * answers.length)]} `;
    name.textContent = `${boyName}`;
  } else {
    let girlName = girlsNames[Math.floor(Math.random() * boysNames.length)];
    answer.textContent = `${answers[Math.floor(Math.random() * answers.length)]} `;
    name.textContent = `${girlName}`;
  }
};
