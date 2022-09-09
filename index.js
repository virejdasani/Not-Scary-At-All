function newRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function randRange(data) {
  var newTime = data[Math.floor(data.length * Math.random())];
  console.log(newTime);
  return newTime;
}

function toggleSomething() {
  var timeArray = new Array(
    20000,
    30000,
    17500,
    27500,
    20000,
    60000,
    10000,
    15000,
    50000
  );

  setTimeout(() => {
    document.getElementById("scary-vid").setAttribute("src", "");
  }, 2000);
  document
    .getElementById("scary-vid")
    .setAttribute(
      "src",
      "./assets/JumpScares/scare" + newRandomNumber(1, 8) + ".mp4"
    );

  clearInterval(timer);
  timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 1000);
