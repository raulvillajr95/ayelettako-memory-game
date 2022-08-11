const startBtn = document.querySelector(".start"),
  resetBtn = document.querySelector(".reset"),
  top1 = document.querySelector(".top-1"),
  top2 = document.querySelector(".top-2"),
  top3 = document.querySelector(".top-3"),
  top4 = document.querySelector(".top-4"),
  top5 = document.querySelector(".top-5"),
  midTop1 = document.querySelector(".midTop-1"),
  midTop2 = document.querySelector(".midTop-2"),
  midTop3 = document.querySelector(".midTop-3"),
  midTop4 = document.querySelector(".midTop-4"),
  midTop5 = document.querySelector(".midTop-5"),
  midBottom1 = document.querySelector(".midBottom-1"),
  midBottom2 = document.querySelector(".midBottom-2"),
  midBottom3 = document.querySelector(".midBottom-3"),
  midBottom4 = document.querySelector(".midBottom-4"),
  midBottom5 = document.querySelector(".midBottom-5"),
  bottom1 = document.querySelector(".bottom-1"),
  bottom2 = document.querySelector(".bottom-2"),
  bottom3 = document.querySelector(".bottom-3"),
  bottom4 = document.querySelector(".bottom-4"),
  bottom5 = document.querySelector(".bottom-5"),
  allDivs = document.querySelectorAll(".container div"),
  spaces = [top1, top2, top3, top4, top5, midTop1, midTop2, midTop3, midTop4, midTop5, midBottom1, midBottom2, midBottom3, midBottom4, midBottom5, bottom1, bottom2, bottom3, bottom4, bottom5];
  // pics = ['url(pics/pic1.jpeg)', 'url(pics/pic2.jpeg)', 'url(pics/pic3.jpeg)', 'url(pics/pic4.jpeg)', 'url(pics/pic5.jpeg)', 'url(pics/pic6.jpeg)', 'url(pics/pic7.jpeg)', 'url(pics/pic.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)', 'url(pics/pic1.jpeg)']

function randomNum(a) {
  return Math.floor(Math.random() * a) + 1;
}

// Pre Load Images
function preloader() {
  if (document.images) {
    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let img4 = new Image();
    let img5 = new Image();
    let img6 = new Image();
    let img7 = new Image();
    let img8 = new Image();
    let img9 = new Image();
    let img10 = new Image();
    let img11 = new Image();
    let img12 = new Image();
    let img13 = new Image();
    let img14 = new Image();
    let img15 = new Image();
    let img16 = new Image();
    let img17 = new Image();
    let img18 = new Image();
    let img19 = new Image();
    let img20 = new Image();

    img1.src = "https://www.raulvillalobos.online/test915/pics/pic1.jpeg";
    img2.src = "https://www.raulvillalobos.online/test915/pics/pic2.jpeg";
    img3.src = "https://www.raulvillalobos.online/test915/pics/pic3.jpeg";
    img4.src = "https://www.raulvillalobos.online/test915/pics/pic4.jpeg";
    img5.src = "https://www.raulvillalobos.online/test915/pics/pic5.jpeg";
    img6.src = "https://www.raulvillalobos.online/test915/pics/pic6.jpeg";
    img7.src = "https://www.raulvillalobos.online/test915/pics/pic7.jpeg";
    img8.src = "https://www.raulvillalobos.online/test915/pics/pic8.jpeg";
    img9.src = "https://www.raulvillalobos.online/test915/pics/pic9.jpeg";
    img10.src = "https://www.raulvillalobos.online/test915/pics/pic10.jpeg";
    img11.src = "https://www.raulvillalobos.online/test915/pics/pic11.jpeg";
    img12.src = "https://www.raulvillalobos.online/test915/pics/pic12.jpeg";
    img13.src = "https://www.raulvillalobos.online/test915/pics/pic13.jpeg";
    img14.src = "https://www.raulvillalobos.online/test915/pics/pic14.jpeg";
    img15.src = "https://www.raulvillalobos.online/test915/pics/pic15.jpeg";
    img16.src = "https://www.raulvillalobos.online/test915/pics/pic16.jpeg";
    img17.src = "https://www.raulvillalobos.online/test915/pics/pic17.jpeg";
    img18.src = "https://www.raulvillalobos.online/test915/pics/pic18.jpeg";
    img19.src = "https://www.raulvillalobos.online/test915/pics/pic19.jpeg";
    img20.src = "https://www.raulvillalobos.online/test915/pics/pic20.jpeg";
  }
}
function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

// Sounds
let flipSound = new Audio('sounds/flip.wav')
let loseSound = new Audio('sounds/lose.wav')
let winSound = new Audio('sounds/win.wav')

let difficultyLevel = "easy",
  started = !1,
  baseColor = "lightgrey",
  randomSpace;
function pickNumber() {
  randomSpace = spaces[randomNum(20) - 1];
}
function singularTile(a) {
  pickNumber(),
    // randomSpace.style.backgroundColor = "#f0ad4e"
    randomSpace.style.background = `url(pics/pic${randomNum(20)}.jpeg)`
    randomSpace.style.backgroundSize = "cover"
    randomSpace.style.backgroundPosition = "center"

    flipSound.currentTime = 0.318
    flipSound.play();

    hitList.push(randomSpace)
    setTimeout(() => {
      // randomSpace.style.background = baseColor;
      randomSpace.style.background = "url(pics/bg-16.jpg)"
      randomSpace.style.backgroundSize = "cover"
      randomSpace.style.backgroundPosition = "center"

      flipSound.pause();
      flipSound.currentTime = 0;
    }, a);
}
let hitList = [];
function changeColor(a, c) {
  document.querySelectorAll(".container div").forEach((b) => {
    // b.style.backgroundColor = a;
    b.style.background = a;
    if (c === 'blues') {
      b.style.background = "url(pics/bg-16.jpg)"
      b.style.backgroundSize = "cover"
      b.style.backgroundPosition = "center"
    }
  });
}
startBtn.addEventListener("click", () => {
  if (((started = !0), (hitList = []), (tapList = []), "easy" == difficultyLevel)) singularTile(750);
  else if ("medium" == difficultyLevel) {
    let b = 500;
    singularTile(b),
      setTimeout(() => {
        singularTile(b);
      }, b);
  } else if ("hard" == difficultyLevel) {
    let a = 300;
    singularTile(a),
      setTimeout(() => {
        singularTile(a);
      }, a),
      setTimeout(() => {
        singularTile(a);
      }, 2 * a + 10),
      setTimeout(() => {
        singularTile(a);
      }, 3 * a + 20),
      setTimeout(() => {
        singularTile(a);
      }, 4 * a + 30);
  }
});
let tapList = [];
for (let i = 0; i < spaces.length; i++)
  spaces[i].addEventListener("click", () => {
    if ((tapList.push(spaces[i]), "easy" == difficultyLevel))
      !0 == started && randomSpace.classList.value == spaces[i].classList.value
        ? (changeColor("green"),
          winSound.play(),
          setTimeout(() => {
            // changeColor(baseColor);
            changeColor(baseColor, 'blues');
          }, 1e3),
          (started = !1))
        : !0 == started &&
          randomSpace.classList.value != spaces[i].classList.value &&
          (changeColor("red"),
          loseSound.play(),
          setTimeout(() => {
            // changeColor(baseColor);
            changeColor(baseColor, 'blues');
          }, 1e3),
          (started = !1));
    else if ("medium" == difficultyLevel || "hard" == difficultyLevel) {
      let a = hitList.slice(0, tapList.length);
      !0 == started &&
        a[a.length - 1] != tapList[tapList.length - 1] &&
        (changeColor("red"),
        loseSound.play(),
        setTimeout(() => {
          // changeColor(baseColor);
          changeColor(baseColor, 'blues');
        }, 1e3),
        (started = !1)),
        !0 == started &&
          hitList.length == tapList.length &&
          (changeColor("green"),
          winSound.play(),
          setTimeout(() => {
            // changeColor(baseColor);
            changeColor(baseColor, 'blues');
          }, 1e3),
          (started = !1));
    }
  });
const difficulty = document.getElementById("difficulty"),
  confirm = document.querySelector(".confirm");
confirm.addEventListener("click", () => {
  (hitList = []),
    (tapList = []),
    "easy" == difficulty.value
      ? ((difficultyLevel = "easy"), changeColor(baseColor, 'blues'))
      : "medium" == difficulty.value
      ? ((difficultyLevel = "medium"), changeColor(baseColor, 'blues'))
      : "hard" == difficulty.value && ((difficultyLevel = "hard"), changeColor(baseColor, 'blues'));
});