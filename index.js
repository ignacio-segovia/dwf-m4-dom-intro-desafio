const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const itemsEls = document.querySelectorAll(".lista li");

  for (let el of itemsEls) {
    el.remove();
  }

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    const laClaseQueLeVoyAAgirnarAlLi = item.class || "item";
    newLiEl.classList.add(laClaseQueLeVoyAAgirnarAlLi);
    listaEl.appendChild(newLiEl);
  }
}

main();
