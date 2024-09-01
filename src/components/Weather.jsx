import { useState, useEffect } from "react"

export default function Weather(){
    const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY
    const weatherAPIBaseURL = import.meta.env.VITE_WEATHER_API_BASE_URL

    const [weather, setWeather] = useState({
        "location": {
            "name": "Ho Chi Minh City",
            "region": "",
            "country": "Vietnam",
            "lat": 10.75,
            "lon": 106.67,
            "tz_id": "Asia/Ho_Chi_Minh",
            "localtime_epoch": 1725210322,
            "localtime": "2024-09-02 00:05"
        },
        "current": {
            "last_updated_epoch": 1725210000,
            "last_updated": "2024-09-02 00:00",
            "temp_c": 24.2,
            "is_day": 0,
            "condition": {
                "text": "Light rain",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
                "code": 1183
            },
            "precip_mm": 2.22,
            "humidity": 100,
            "cloud": 25,
            "feelslike_c": 26.8,
            "feelslike_f": 80.2,
            "air_quality": {
                "co": 2162.9,
                "no2": 33.2,
                "o3": 0.0,
                "so2": 39.6,
                "pm2_5": 94.3,
                "pm10": 107.6,
                "us-epa-index": 4,
                "gb-defra-index": 10
            }
        }
    })
    
    useEffect(() => {
        let latlong = "";
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                latlong = position.coords.latitude.toString() + "," + position.coords.longitude.toString();

                fetch(`${weatherAPIBaseURL}/current.json?key=${weatherAPIKey}&q=${latlong}`)
                .then(res => res.json())
                .then(res => setWeather(res))
            });
        }
    }, []);
    

    return(
        <div className="dark:bg-zinc-50 bg-zinc-800 dark:text-zinc-800 text-zinc-50 w-fit px-5 py-2 flex justify-center rounded-3xl gap-2 mt-4">
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="size-7"/>
            <p className="my-auto">{weather.current.temp_c}&deg;C</p>
        </div>
    )
}