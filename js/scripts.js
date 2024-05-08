const KEY = "309153f89e90644acc40547f48e8a350";


const selectChangeHandle = () => {
    const city = document.querySelector('.input-city').value;
    searchCity(city);
}

const populateSelectStates = async () => {
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
        .then(response => response.json())
    data.forEach(({nome, sigla}) => {
        let option = document.createElement('option');
        option.value=sigla;
        option.innerText=nome;
        option.classList.add('state-options')
        document.querySelector('.input-state').appendChild(option);
    });
}
populateSelectStates();
document.querySelector('.input-state').addEventListener('change', (evt) => {
    populateSelectCities(evt.target.value)
    document.querySelector('.input-city').classList.remove('d-none');
    populateDataInScreen({cod: '400'});
})

const populateSelectCities = async (state) => {
    document.querySelector('.input-city').innerHTML = `<option value="" class="city-options">Escolha uma cidade</option>`
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
        .then(response => response.json())
    data.forEach(({nome}) => {
        let option = document.createElement('option');
        option.value=nome;
        option.innerText=nome;
        option.classList.add('city-options')
        document.querySelector('.input-city').appendChild(option);
    });
}

const searchCity = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=pt_br&units=metric`)
    .then(response => response.json())
    populateDataInScreen(data);
}

const populateDataInScreen = (data) => {
    if(data.cod !== '400'){
        document.querySelector('.city').innerHTML = `Tempo em ${data.name}`
        
        document.querySelector('.temperature').innerHTML = `${Math.floor(data.main.temp)}°C`
        document.querySelector('.text-forecast').innerHTML = data.weather[0].description
        document.querySelector('.humidity').innerHTML = `Umidade: ${data.main.humidity}%`
        document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        document.querySelector('.temperature').classList.remove('d-none');
        document.querySelector('.text-forecast').classList.remove('d-none');
        document.querySelector('.humidity').classList.remove('d-none');
        document.querySelector('.img-forecast').classList.remove('d-none');
    } else{
        document.querySelector('.city').innerHTML = `Não foi escolhida uma cidade`
        
        document.querySelector('.temperature').classList.add('d-none');
        document.querySelector('.text-forecast').classList.add('d-none');
        document.querySelector('.humidity').classList.add('d-none');
        document.querySelector('.img-forecast').classList.add('d-none');
    }
}

document.querySelector('.input-city').addEventListener('change', selectChangeHandle)