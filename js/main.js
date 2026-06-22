const navButton = document.querySelector(".nav-button");
const nav = document.querySelector("#nav");

navButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navButton.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navButton?.setAttribute("aria-expanded", "false");
  });
});
