import _ from "lodash";
import clickMe from "./print";
console.log("run scripts");
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack update v2 build", ""]);
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and see console";
  btn.onclick = clickMe;
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
