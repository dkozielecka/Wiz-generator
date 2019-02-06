import { girlClick, boyClick, btnGirl, btnBoy } from "./js/config.js";
import { generator } from "./js/generator.js";

btnBoy.addEventListener("click", boyClick);
btnBoy.addEventListener("click", generator);
btnGirl.addEventListener("click", girlClick);
btnGirl.addEventListener("click", generator);
