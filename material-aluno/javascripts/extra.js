document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".md-header__inner");

  if (!header || document.querySelector("#toggle-sidebars")) return;

  const button = document.createElement("button");

  button.id = "toggle-sidebars";
  button.className = "md-header__button md-icon";
  button.type = "button";
  button.setAttribute("aria-label", "Ocultar barras laterais");
  button.setAttribute("aria-pressed", "false");
  button.title = "Alternar barras laterais";

  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width="24" height="24"
         fill="currentColor">
      <path d="M3 4h18v16H3V4zm2 2v12h14V6H5zm4 0v12h2V6H9z"/>
    </svg>
  `;

  button.addEventListener("click", () => {
    const hidden = document.body.classList.toggle("hide-sidebars");

    button.setAttribute("aria-pressed", String(hidden));
    button.setAttribute(
      "aria-label",
      hidden ? "Mostrar barras laterais" : "Ocultar barras laterais"
    );
  });

  header.appendChild(button);
});