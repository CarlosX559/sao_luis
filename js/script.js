function menu() {
  let open = document.querySelector(".area_open_menu");
  let menu = document.querySelector(".area_menu_mobile");
  open.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.right = "0px";
    menu.style.animation = "move ease-in 400ms";
  });

  let close = document.querySelector(".close_menu");

  close.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.right = "-100%";
    menu.style.animation = "move ease-out 400ms";
  });

  let area_menu_mobile = document.querySelectorAll(".menu_mobile nav ul a");

  area_menu_mobile.forEach((element) => {
    element.addEventListener("click", () => {
      menu.style.right = "-100%";
      menu.style.animation = "move ease-out 400ms";
    });
  });
}
window.addEventListener( 'load',  menu);

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}
