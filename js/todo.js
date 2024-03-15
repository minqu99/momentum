const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // string 반복, 실수 줄이기 위해 변수화

let toDos = []; // uqdate 가능

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify() -> string으로 변환 (array 전체를 하나의 string으로 저장 가능)
  // JSON.parse() -> JS object로 변환 (array처럼 생긴 string을 array로 만들 수 있다. )
  //localstorage에 저장(브라우저에 저장) -> ["1", "2"] 일 경우, [ 랑 " 도 각각의 string으로 저장
}

function deleteTodo(event) {
  const li = event.target.parentElement; //button의 상위 속성 elemetn 알려준다.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id = string
  saveTodos(); // 지운 array를 localStorage 에 새로 저장
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li"); // html 태그를 js에서 만들기
  li.id = newTodoObj.id; // html에 id 속성으로 추가
  const span = document.createElement("span");
  span.innerText = newTodoObj.text; //object는 id 와 text로 구성 되기 때문

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo); // event listen
  // 어떤 button이 click됐는지 알기 어렵다. -> event가 click 위치를 알려준다.(속성에 담겨있음)

  li.appendChild(span); // li 태그 안에 span 태그 넣기
  li.appendChild(button);
  toDoList.appendChild(li); // html #todo-list 에 li 넣기
}

function handleToDoSubmit(event) {
  //default active => event로 표시하는게 관례
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo, // object로 다룸
    id: Date.now(), // 삭제 시 텍스트 구분하기 위해 밀리초를 랜덤 idfh qndu
  };
  toDos.push(newTodoObj); // array에 저장, 예전 todo는 덮여 씌여지게 된다.
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//    console.log("hi to ", item)
//} // event처럼 처리되고 있는 Item을 기본으로 제공

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach((item) => console.log("hi to ", item));
  toDos = parsedToDos; // 새로고침 마다 빈 array에 추가되는게 아니라 기존 todo에 plus
  parsedToDos.forEach(paintTodo); // -> painTodo()가 item을 전달
  // forEach -> array의 모든 item에 한 개의 function 실행
  // 따로 function 안 만들고 바로 할 수도 있다. (item은 js에서 기본 제공하는 info)
}

// .filter -> 지우고 싶은 Item 제외하고 새로운 array를 만드는 것
//[1,2,3,4].filter()
// --> true를 반환할 때만 저장! forEach 와 비슷하게 요소에 하나씩 function 실행
