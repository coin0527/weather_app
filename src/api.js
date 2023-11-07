import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "d8f9ef2ac01a173d53e95316a107d3a1",
  },
});

export const getWeather = ({ queryKey }) => {
  const [_, lat, lon] = queryKey;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

//.then -> 그리고난 다음에
