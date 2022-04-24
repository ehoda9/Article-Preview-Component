const ShareEle = document.querySelector(".share");
const ShareBtn = document.querySelector(".iconn");
const OpenShare1 = document.querySelector(".open-share-lg");

//meida Queries
let lgScreen = window.matchMedia("(min-width: 480px)");
let smScreen = window.matchMedia("(min-width: 479px)");

function BtnFunc() {
  if (lgScreen.matches) {
    if (
      ShareEle.classList.contains("active") &&
      OpenShare1.classList.contains("activeOpacity")
    ) {
      ShareEle.classList.remove("active");
      OpenShare1.classList.remove("activeOpacity");
    } else {
      ShareEle.classList.add("active");
      OpenShare1.classList.add("activeOpacity");
    }
  } else {
    if (
      ShareEle.classList.contains("active") &&
      OpenShare1.classList.contains("activeleft")
    ) {
      ShareEle.classList.remove("active");
      OpenShare1.classList.remove("activeleft");
    } else {
      ShareEle.classList.add("active");
      OpenShare1.classList.add("activeleft");
    }
  }
}

ShareEle.addEventListener("click", BtnFunc);
