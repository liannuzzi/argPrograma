"use client";
import WeatherCard from "@/components/WeatherCard/weatherCard";
import Button from "@/components/Button/button";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar/searchBar";

export default function Home() {
  const apikey: string = "0be337e872958dca5112d9c32f7791f4";

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=${apikey}&units=metric&lang=es`
        );
        const result = await response.json();
        setSearchResults(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onBlurSearchBar = (value: string) => {
    setSearchValue(value);
  };

  const searchWeather = (latitude: number, longitude: number) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      });
  };

  const searchCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const cityResults = document.getElementById(
          "city-results"
        ) as HTMLDivElement;
        if (cityResults) {
          const removeNodes = () => {
            while (cityResults.firstChild) {
              cityResults.removeChild(cityResults.firstChild);
            }
          };
          removeNodes();
          const newUl = document.createElement("ul");
          newUl.id = "city-list";
          cityResults.appendChild(newUl);
          const cityList = document.getElementById("city-list");
          const resultsList = data.map((city: any) => {
            const el = document.createElement("li");
            el.className =
              "border-2 border-black p-2 cursor-pointer bg-gradient-to-r from-slate-600 to-slate-500  ";
            el.onclick = () => {
              searchWeather(city.lat, city.lon);
            };
            el.innerHTML = `${city.name}, ${city.state}, ${city.country}`;

            cityList?.appendChild(el);
          });
        }
      });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl font-bold">Clima</h1>
        <WeatherCard
          weatherData={searchResults}
          loading={loading}
        ></WeatherCard>
        <div className="flex flex-row gap-2">
          <SearchBar handleChange={onBlurSearchBar}></SearchBar>
          <Button name="Buscar" searchFn={searchCity}></Button>
        </div>
        <div id="city-results"></div>
      </div>
    </>
  );
}
