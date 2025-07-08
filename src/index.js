// index.js
import { greeting } from "./greeting.js";
import "./styles.css";
import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

console.log(greeting);
