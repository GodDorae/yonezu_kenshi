const modal1 = document.getElementById("modal1");
const album1Button = document.getElementById("black");
const album1CloseButton = document.getElementById("modal1_close");

function closeModal1() {
  modal1.style.display = "none";
}

album1Button.addEventListener("click", () => {
  modal1.style.display = "flex";
});
album1CloseButton.addEventListener("click", () => {
  closeModal1();
});
modal1.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.classList.contains("modal_overlay")) {
    closeModal1();
  }
});
window.addEventListener("keyup", (e) => {
  if (modal1.style.display === "flex" && e.key === "Escape") {
    closeModal1();
  }
});

const modal2 = document.getElementById("modal2");
const album2Button = document.getElementById("red");
const album2CloseButton = document.getElementById("modal2_close");

function closeModal2() {
  modal2.style.display = "none";
}

album2Button.addEventListener("click", () => {
  modal2.style.display = "flex";
});
album2CloseButton.addEventListener("click", () => {
  closeModal2();
});
modal2.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.classList.contains("modal_overlay")) {
    closeModal2();
  }
});
window.addEventListener("keyup", (e) => {
  if (modal2.style.display === "flex" && e.key === "Escape") {
    closeModal2();
  }
});

const modal3 = document.getElementById("modal3");
const album3Button = document.getElementById("green");
const album3CloseButton = document.getElementById("modal3_close");

function closeModal3() {
  modal3.style.display = "none";
}

album3Button.addEventListener("click", () => {
  modal3.style.display = "flex";
});
album3CloseButton.addEventListener("click", () => {
  closeModal3();
});
modal3.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.classList.contains("modal_overlay")) {
    closeModal3();
  }
});
window.addEventListener("keyup", (e) => {
  if (modal3.style.display === "flex" && e.key === "Escape") {
    closeModal3();
  }
});

const modal4 = document.getElementById("modal4");
const album4Button = document.getElementById("black2");
const album4CloseButton = document.getElementById("modal4_close");

function closeModal4() {
  modal4.style.display = "none";
}

album4Button.addEventListener("click", () => {
  modal4.style.display = "flex";
});
album4CloseButton.addEventListener("click", () => {
  closeModal4();
});
modal4.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.classList.contains("modal_overlay")) {
    closeModal4();
  }
});
window.addEventListener("keyup", (e) => {
  if (modal4.style.display === "flex" && e.key === "Escape") {
    closeModal4();
  }
});

const modal5 = document.getElementById("modal5");
const album5Button = document.getElementById("blue");
const album5CloseButton = document.getElementById("modal5_close");

function closeModal5() {
  modal5.style.display = "none";
}

album5Button.addEventListener("click", () => {
  modal5.style.display = "flex";
});
album5CloseButton.addEventListener("click", () => {
  closeModal5();
});
modal5.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.classList.contains("modal_overlay")) {
    closeModal5();
  }
});
window.addEventListener("keyup", (e) => {
  if (modal5.style.display === "flex" && e.key === "Escape") {
    closeModal5();
  }
});

const editorList = document.querySelector(".main_pick_ul");
const leftButtons = document.querySelectorAll(".left");
const rightButtons = document.querySelectorAll(".right");
const lists = document.querySelectorAll(".main_pick_li");

const listWidth = editorList.clientWidth;
let i = 1;
let movingWidth = 0;
// Previous
for (let index = 0; index < leftButtons.length; index++) {
  leftButtons[index].addEventListener("click", () => {
    if (i === 1) {
      movingWidth = -(listWidth * 4);
      for (let indexOfList = 0; indexOfList < lists.length; indexOfList++) {
        lists[indexOfList].style.transform = `translateX(${movingWidth}px)`;
      }
      i = 5;
    } else {
      movingWidth += listWidth
      for (let indexOfList = 0; indexOfList < lists.length; indexOfList++) {
        lists[indexOfList].style.transform = `translateX(${movingWidth}px)`;
      }
      i -= 1;
    }
  })
}
// Next
for (let index = 0; index < rightButtons.length; index++) {
  rightButtons[index].addEventListener("click", () => {
    if (i === 5) {
      movingWidth = 0;
      for (let indexOfList = 0; indexOfList < lists.length; indexOfList++) {
        lists[indexOfList].style.transform = `translateX(${movingWidth}px)`;
      }
      i = 1;
    } else {
      movingWidth -= listWidth
      for (let indexOfList = 0; indexOfList < lists.length; indexOfList++) {
        lists[indexOfList].style.transform = `translateX(${movingWidth}px)`;
      }
      i += 1;
    }
  })
}