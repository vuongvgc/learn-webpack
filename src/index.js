import _ from "lodash";
console.log("run scripts");
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack update v2 build", ""]);
  return element;
}
document.body.appendChild(component());
