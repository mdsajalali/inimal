const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const menuBackdrop = document.getElementById("menuBackdrop");

function openMenu() {
  mobileMenu.classList.remove("-translate-x-full");
  menuBackdrop.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("-translate-x-full");
  menuBackdrop.classList.add("hidden");
}

menuToggle.addEventListener("click", () => {
  openMenu();
});

menuCloseBtn.addEventListener("click", () => {
  closeMenu();
});

menuBackdrop.addEventListener("click", () => {
  closeMenu();
});
