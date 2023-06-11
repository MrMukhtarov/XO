let x = "X";
let o = "O";
let arr = [];
let count = 1;
let player1;
let player2;
let point1 = 0;
let point2 = 0;

let nam1 = document.getElementById("Xname");
let nam2 = document.getElementById("Yname");
let points1 = document.getElementById("Xpoint");
let points2 = document.getElementById("Ypoint");
start();

function start() {
  player1 = player1 == undefined ? prompt("Player1", "X") : player1;
  player2 = player2 == undefined ? prompt("Player2", "O") : player2;
  Arr();
  table();
  points1.innerHTML = point1;
  points2.innerHTML = point2;
  nam1.innerHTML = player1;
  nam2.innerHTML = player2;
}

function table() {
  let tb1 = document.getElementById("tbl");
  let tr = "";

  for (let i = 0; i < 3; i++) {
    tr += `<tr>`;

    for (let j = 0; j < 3; j++) {
      tr += `<td onclick="Click(${i},${j})">${
        arr[i][j] == undefined ? `` : arr[i][j]
      }</td>`;
    }

    tr += `</tr>`;
  }

  tb1.innerHTML = tr;
}

function Arr() {
  for (let i = 0; i < 3; i++) {
    arr[i] = [];
  }
}

function Click(i, j) {
  if (arr[i][j] == undefined) {
    if (count % 2 == 0) {
      arr[i][j] = o;
    } else {
      arr[i][j] = x;
    }
    count++;
    table();
    if (count == 9) {
      document.getElementById("h1").innerHTML = `Beaberlik var`;
      start();
    }
    setTimeout(() => {
      check();
    }, 500);
  }
}

function check() {
  for (let i = 0; i < 3; i++) {
    if (
      arr[i][0] !== undefined &&
      arr[i][0] === arr[i][1] &&
      arr[i][1] === arr[i][2]
    ) {
      alert(arr[i][0] == x ? player1 : player2);
      count = 0;
      console.log(arr[i][0] == x ? ++point1 : ++point2);
      start();
    } else if (
      arr[0][i] !== undefined &&
      arr[0][i] === arr[1][i] &&
      arr[1][i] === arr[2][i]
    ) {
      alert(arr[0][i] == x ? player1 : player2);
      console.log(arr[0][i] == x ? ++point1 : ++point2);
      count = 0;
      start();
    } else if (
      arr[0][0] != undefined &&
      arr[0][0] == arr[1][1] &&
      arr[1][1] == arr[2][2]
    ) {
      alert(arr[0][0] == x ? player1 : player2);
      console.log(arr[0][0] == x ? ++point1 : ++point2);
      count = 0;
      start();
    } else if (
      arr[0][2] != undefined &&
      arr[0][2] == arr[1][1] &&
      arr[1][1] == arr[2][0]
    ) {
      alert(arr[0][2] == x ? player1 : player2);
      console.log(arr[0][2] == x ? ++point1 : ++point2);
      count = 0;
      start();
    }
    Win();
  }
  function Win() {
    if (point1 == 3) {
      setTimeout(() => {
        document.getElementById("h1").innerHTML = `${"you are win " + player1}`;
      }, 500);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else if (point2 == 3) {
      setTimout(() => {
        document.getElementById("h1").innerHTML = `${"you are win " + player2}`;
      }, 500);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }
}
