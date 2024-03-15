const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
// padStart(2, "0")는 string 길이와 빈 자리에 들어갈 string 결정
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 바로 실행되도록 하기 위해(아니면 1초 기다려야함)
setInterval(getClock, 1000); //몇 초마다(ms기준) 실행할 것인가?(반복)
// setTimeout(sayHello, 5000); // no 반복