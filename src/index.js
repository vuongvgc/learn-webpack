import _ from "lodash";
import "./style.css";
import Icon from "./image.jpg";
import data from "./data.xml";
import notes from "./notes.svg";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json5 from "./data.json5";
console.debug("toml", toml);
console.debug("yayaml", yaml);
console.debug("json5", json5);
console.log("run scripts");
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack update v2 build", ""]);
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.debug("data", data);
  console.debug("notes", notes);
  return element;
}
document.body.appendChild(component());
