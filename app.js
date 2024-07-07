let selector = (ele) => document.querySelector(ele);
let allSelector = (ele) => document.querySelectorAll(ele);

let menu = selector("#menu-icon");
let navbar = selector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("bi-x");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("bi-x");
};
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".form-container form", { delay: 800, origin: "left" });
sr.reveal(".heading", { delay: 500, origin: "left" });
sr.reveal(".ride-container .box", { delay: 500, origin: "left" });
sr.reveal(".ride-container .box", { delay: 500, origin: "left" });
sr.reveal(".about-container", { delay: 500, origin: "top" });

sr.reveal(".review-container .box", { delay: 400, origin: "top" });
sr.reveal(".newslatter", { delay: 700, origin: "bottom" });
