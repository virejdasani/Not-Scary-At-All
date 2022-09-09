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
    100000,
    52000,
    44500,
    68500,
    150000,
    60000,
    40000,
    105000,
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
