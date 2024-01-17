const init = () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebarclosebutton = document.querySelector(".close-button");

  const sidebarcontainer = document.querySelector(".sidebar-container");

  const opensidebar = () => {
    console.log(sidebarcontainer.classList);
  };

  hamburger.addEventListener("click", () => {
    sidebarcontainer.classList.add("show-sidebar");
  });

  sidebarclosebutton.addEventListener("click", () => {
    sidebarcontainer.classList.remove("show-sidebar");
  });
};
init();
navrelatedcode = () => {
  const navbercontainer = document.querySelector(".nav-container");

  window.addEventListener("scroll", () => {
    const scrollnumber = window.scrollY;
    const screenwidth = window.innerWidth >= 992 ? 70 : 50;
    if (scrollnumber >= screenwidth) {
      navbercontainer.classList.add("sticky-nav");
    }
  });
};
navrelatedcode();
