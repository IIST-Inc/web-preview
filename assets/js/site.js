const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const current = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".main-nav a:not(.nav-cta)").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === current) {
    link.setAttribute("aria-current", "page");
  }
});
