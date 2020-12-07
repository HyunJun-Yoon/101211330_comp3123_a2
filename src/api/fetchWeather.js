import axios from 'axios';

 const fetchWeather = async () => {
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=35887d966835637940e67d76e47f1176');
    return data;
}

export default  fetchWeather;
