const searchBtn = document.querySelector('.search button');
const cityInput = document.querySelector('.search input');

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  let apiKey = "9bd6e52c1c7370e64749fa64bb64c15e";
  let city = cityInput.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  let response = await fetch(url);
  if(!response.ok){
    cityInput.value="";
    alert("thik naam de bro");
    return;
  }
  let data = await response.json();
 console.log(data);
  document.querySelector('.temp').innerHTML=data.main.temp+"°C";
  document.querySelector('.humidity').innerHTML=data.main.humidity +"%" ;
  document.querySelector('.city').innerHTML=city;
  document.querySelector('.wind-speed').innerHTML=data.wind.speed +" Km/h";
  let imgName=data.weather[0].main.toLowerCase();
  let img=document.querySelector('.weather img');
  console.log(imgName);
  img.src=`assests/${imgName}.png`;
  cityInput.value=""
});
