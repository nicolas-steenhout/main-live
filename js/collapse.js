// Thanks to 
// aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/


const navbar = document.getElementById("navbar"),
      navbarToggle = navbar.querySelector("#navbar-toggle"),
      navbarToggleText = navbar.querySelector("#menu-text"),
      navbarMenu = navbar.querySelector("#navbar-menu"),
      navbarLinksContainer = navbar.querySelector(".navbar-links");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
  navbarMenu.setAttribute("aria-labelledby", "navbar-toggle")
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
  navbarMenu.setAttribute("aria-labelledby", "")
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
