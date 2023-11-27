"use client";
import Image from "next/image";

function WeatherCard(props: { weatherData: any; loading: boolean }) {
  if (props.loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className="border-4 rounded border-black gap-2 p-4 bg-gradient-to-r from-indigo-500 to-purple-500 	">
        <h1>{props.weatherData.name}</h1>
        <div className="flex flex-row justify-center items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
            width={60}
            height={60}
            alt="weather-icon"
          />
          <p className="capitalize">
            {props.weatherData.weather[0].description}
          </p>
        </div>

        <p>
          <i className="bi bi-thermometer-half"></i> Temperatura:
          {props.weatherData.main.temp} <sup>o</sup>C
        </p>
        <p>
          <i className="bi bi-thermometer-low"></i> Minima:
          {props.weatherData.main.temp_min} <sup>o</sup>C
        </p>
        <p>
          <i className="bi bi-thermometer-high"></i> Maxima:
          {props.weatherData.main.temp_max} <sup>o</sup>C
        </p>
        <p>
          Sensacion Termica: {props.weatherData.main.feels_like} <sup>o</sup>C
        </p>
        <p>Presion: {props.weatherData.main.pressure}hPa</p>
        <p>Humedad: {props.weatherData.main.humidity}%</p>
        <p>
          <i className="bi bi-wind"></i> Viento:{props.weatherData.wind.speed}{" "}
          m/seg
        </p>
      </div>
    </>
  );
}

export default WeatherCard;
