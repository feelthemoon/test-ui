import "../styles/style.css";
import img from "../img/box.png";

import Inputmask from "inputmask";

Inputmask({ mask: "+7 (999) 999-99-99" }).mask(
  document.getElementById("phone")
);

const modal = document.getElementById("modal");
const body = document.getElementsByTagName("body")[0];

document.getElementById("box").setAttribute("src", img);

document.getElementById("modal-bg").addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__bg")) {
    modal.classList.remove("show");
    body.classList.remove("modal-open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
    body.classList.remove("modal-open");
  }
});

document.getElementById("order").addEventListener("click", () => {
  modal.classList.add("show");
  window.scrollTo(0, 200);
  body.classList.add("modal-open");
});
