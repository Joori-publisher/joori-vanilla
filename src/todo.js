const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteTodo(event) {
  const btn = event.target,
    li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function paintToDo(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button");
  delBtn.innerText = " ❌";
  delBtn.addEventListener("click", deleteTodo);
  const span = document.createElement("span"),
    newId = toDos.length + 1;

  span.innerText = "📌 " + text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
