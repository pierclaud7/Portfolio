const menu = document.getElementById("menuLinks");
const burger = document.getElementById("burgerIcon");
const navLinks = document.querySelectorAll("#menuLinks a");

burger.addEventListener("click", () => {
  const isOpen = menu.classList.contains("open");

  burger.classList.toggle("open");

  if (isOpen) {
    // Fermeture
    menu.classList.remove("open");
    menu.style.animation = "modernDropdownClose 0.3s ease forwards";
    setTimeout(() => {
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
    }, 300);
  } else {
    // Ouverture
    menu.classList.add("open");
    menu.style.animation = "modernDropdownOpen 0.3s ease forwards";
    menu.style.opacity = "1";
    menu.style.pointerEvents = "auto";
  }
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    menu.classList.remove("open");
    menu.style.animation = "modernDropdownClose 0.3s ease forwards";
    setTimeout(() => {
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
    }, 300);
  });
});