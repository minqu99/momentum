const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// js 에서 html element 생성, = <img src=""/>
document.body.prepend(bgImage); //html body에 추가!
// prepend()는 body 가장 위에 추가
*/

const bgImage = `url(img/${chosenImage})`;

document.body.style.backgroundImage = bgImage;
// 배경으로 바꿔주기 위해 js에서 css 바꿈
