// openweathermap.org --> 위치 API get

const API_KEY = "f09bbb403205b700a3252cece6ee2d02";

function onGeoOk(position) {
  // 기본 object(User 위치) 제공 --> getCurrentPosition() 함수에서 기본 제공(smae as 'item', 'event)
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // js가 브라우저에 url을 요청헤서 get, 이걸 이용해서 코드를 짤 수 있다.
  // fetch로 url 얻고 (then) json 응답 얻고(main 내용) (then) 안의 data 중 선택해서 get
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // --> 브라우저의 위치 좌표 get
// getCurrentPosition(onGeoOk, onGeoError) --> 성공했을 때랑 실패했을 때의 두 개의 함수 필수 필요
