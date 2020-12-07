import axios from 'axios';


 const fetchWeather = async () => {
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f2c8d0cf827a74e964a6331a21ff7a76');
    return data;
}

export default  fetchWeather;
