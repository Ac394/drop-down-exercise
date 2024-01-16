const dropdowns = document.querySelectorAll(".dropdown-container");

dropdowns.forEach((dropdown) => {
  const button = dropdown.children[0];
  const list = dropdown.children[1];
  const options = list.children;
  const title = button.children[0];

  document.addEventListener("click", (event) => {
    if (event.target.closest(".active") !== dropdown) {
      dropdown.classList.remove("active");
    }
  });

  button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  for (const option of options) {
    option.addEventListener("click", () => {
      title.innerText = option.innerText;
      dropdown.classList.remove("active");
    });
  }
});
