const todos = [
  { id: 23, task: "yemek ye" },
  { id: 42, task: "dışarı çık" },
  { id: 52, task: "yazilim yap" },
];

// 1
function todolist() {
  const li = document.getElementById("listeler");

  li.innerText = "";

  for (const mylist of todos) {
    li.innerHTML += `<li>${mylist.task}</li>`;
  }
}

// 2
function ekle() {
  const todo = prompt("ToDo ekleyin...");
  if (todo === null || !todo) {
    return;
  }

  todos.push(todo);
  const eklemeYap = document.getElementById("listeler");
  eklemeYap.innerHTML += `<li>${todo}</li>`;
  console.log(todos);
}

todolist();

// 3

// toplama sorusu
function topla() {
  const input = prompt("15 + 25 = ?");
  let sonuc = 15 + 25;

  if (input === null) {
    alert("işleminiz iptal edilmiştir.");
    return;
  }

  const number = parseInt(input);

  if (number === sonuc) {
    alert("tebrikler doğru cevap: " + sonuc);
  } else {
    alert("lütfen tekrar deneyin");
  }
}

// çıkartma sorusu
function cikart() {
  const input = prompt("50 - 25 = ?");
  let sonuc = 50 - 25;

  if (input === null) {
    alert("işleminiz iptal edilmiştir.");
    return;
  }

  const number = parseInt(input);

  if (number === sonuc) {
    alert("tebrikler doğru cevap: " + sonuc);
  } else {
    alert("lütfen tekrar deneyin");
  }
}

function carp() {
  const input = prompt("4 x 4 = ?");
  let sonuc = 4 * 4;

  if (input === null) {
    alert("işleminiz iptal edilmiştir.");
    return;
  }

  const number = parseInt(input);

  if (number === sonuc) {
    alert("tebrikler doğru cevap: " + sonuc);
  } else {
    alert("lütfen tekrar deneyin");
  }
}

// 4
function white() {
  document.body.className = "white";
}

function green() {
  document.body.className = "green";
}

function aqua() {
  document.body.className = "aqua";
}

// 5

function row() {
  const degistir = document.getElementById("column");
  degistir.className = "toRow";
}

function column() {
  const degistir = document.getElementById("column");
  degistir.className = "toColumn";
}
