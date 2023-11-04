import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "d8f9ef2ac01a173d53e95316a107d3a1",
  },
});

export const getWeather = () => {
  const lat = 35.2038169182659;
  const lon = 128.82439334087974;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
