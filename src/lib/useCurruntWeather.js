import { useEffect, useState } from "react";

export const useCurruntWeather = () => {
  // 오류났을때 기본값
  const defaultLat = 35.2038169182659;
  const defaultLon = 128.82439334087974;

  // 지역변수를 전역변수로 만들기 위해 가장 적합한 useState
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    // 비구조화 할당
    const {
      coords: { latitude, longitude },
    } = pos;
    console.log(latitude, longitude);
    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // 현재 위치기반으로 위도, 경도값을 가져올 수 있음.
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
