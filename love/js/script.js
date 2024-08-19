window.onload = () => {
  const textElements = document.querySelectorAll(".text");
  const targetDiv = document.querySelector("#target-div");

  textElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      targetDiv.classList.remove("not-loaded");
      targetDiv.classList.add("loaded");
    });
    element.addEventListener("mouseout", () => {
      targetDiv.classList.remove("loaded");
      targetDiv.classList.add("not-loaded");
    });
  });
};

document.addEventListener("dragstart", function(event) {
  if (event.target.classList.contains("cute")) {
      event.preventDefault();
  }
});