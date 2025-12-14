const input = document.getElementById('cityInput');
const button = document.getElementById('searchBtn');
const weatherDiv = document.getElementById('weather');
const errorEl = document.getElementById('error');
const loading = document.getElementById('loading');

button.addEventListener('click', ()=> {
    let city = input.value.trim();
    if(!city){
        return;
    }
    getWeather(city);
})

async function getWeather(city){
    loading.innerText = 'loading ....!';
    errorEl.innerText = '';
    weatherDiv.innerHTML = '';

    try{
        const res = await fetch(
            `http://localhost:3000/weather?city=${city}`
        );
        if(!res.ok){
            throw new Error('Server Error !');
        }
        const data = await res.json();
        if(data.length === 0 ){
            throw new Error('City Not Found !');
        }
        showWeather(data[0]);
    }catch(err){
        errorEl.innerText = err.message;
        errorEl.style.color = "red";
    }finally{
        loading.innerText = '';
    }
}
function showWeather(data){
    weatherDiv.innerHTML = `
        <h3>${data.city}</h3>
        <p>Temperature: ${data.temp}</p>
        <p>Weather:${data.description}</p>`
}