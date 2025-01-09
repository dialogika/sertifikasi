const btnTriggerSosmed = document.querySelector(".btn-trigger-sosmed");
const btnWa = document.querySelector(".btn-wa");
const btnLinkedin = document.querySelector(".btn-linkedin");
const btnX = document.querySelector(".btn-x");
const btnIg = document.querySelector(".btn-ig");
const btnTiktok = document.querySelector(".btn-tiktok");

let active = false;

btnTriggerSosmed.addEventListener("click", () => {
  if (!active) {
    btnTriggerSosmed.innerHTML = '<i class="bi bi-x-circle"></i>';
    btnWa.classList.add("btn-wa-active");
    btnLinkedin.classList.add("btn-linkedin-active");
    btnX.classList.add("btn-x-active");
    btnIg.classList.add("btn-ig-active");
    btnTiktok.classList.add("btn-tiktok-active");
  } else {
    btnTriggerSosmed.innerHTML =
      '<i class="bi bi-phone-fill bx-tada" id="icon-trigger"></i>';
    btnWa.classList.remove("btn-wa-active");
    btnLinkedin.classList.remove("btn-linkedin-active");
    btnX.classList.remove("btn-x-active");
    btnIg.classList.remove("btn-ig-active");
    btnTiktok.classList.remove("btn-tiktok-active");
  }

  active = !active;
});
