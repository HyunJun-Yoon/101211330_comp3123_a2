import axios from 'axios';


 const fetchWeather = async () => {
    const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=6216d256d510727462edf02fc82d7c1d');
    return data;
}

export default  fetchWeather;
