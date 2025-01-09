document.addEventListener("DOMContentLoaded", function () {
  const formImg = document.querySelector(".contact-append .form-img");
  const programSelect = document.getElementById("programs");

  if (formImg && programSelect) {
    programSelect.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      const selectedId = selectedOption.id;

      switch (selectedId) {
        case "action-play":
          changeFormImg("assets/img/program/action-play/action-play.webp");
          break;
        case "basic-plus":
          changeFormImg(
            "assets/img/program/basic-plus/basic-plus-mini-card.webp"
          );
          break;
        case "basic-private":
          changeFormImg(
            "assets/img/program/basic-private/basic-private-mini-card.webp"
          );
          break;
        case "basic-play-3-bulan":
          changeFormImg(
            "assets/img/program/basic-play/basic-play-mini-card.webp"
          );
          break;
        case "ask-adm":
          changeFormImg("assets/img/program/asking-admin/asking-admin.webp");
          break;
        default:
          console.error("No matching option found.");
      }
    });
  }
});

window.changeFormImg = (url) => {
  const formImg = document.querySelector(".contact-append .form-img");
  if (formImg) {
    formImg.src = url;
  }
};
