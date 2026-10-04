const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href").replace("./", "");

  if (href === currentPage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});