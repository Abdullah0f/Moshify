const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// wrap element with span tag
const items = document.querySelectorAll(".block-domain__prices>li");
items.forEach((item) => {
  item.addEventListener("click", function () {
    reset();
    setDomain(this);
  });
});

function setDomain(item) {
  const span = document.createElement("span");
  span.classList.add("badge");
  span.classList.add("badge--secondary");
  span.textContent = item.textContent;
  item.textContent = "";
  item.appendChild(span);
}

function reset() {
  const items = document.querySelectorAll(".block-domain__prices>li");
  items.forEach((item) => {
    const span = item.querySelector("span");
    if (span) item.textContent = span.textContent;
  });
}
