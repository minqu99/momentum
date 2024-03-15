const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onloginSubmit(event){
    event.preventDefault(); // prevent to default behavior 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // save an item in localStorage
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`; // = "Hello! " + username
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onloginSubmit);
    // submit 은 enter나 button 누를 때 event
    // submit 하면 브라우저는 새로고침도 자동으로 한다(기본동작) -> preventDefault() 사용
} else{
    paintGreetings(savedUsername);
}

// link 이동 막기 
// function handleLinkClick(event){
//     alert("clicked!");
//     event.preventDefault(); // prevent to default behavior
// }
// link.addEventListener("click", handleLinkClick);