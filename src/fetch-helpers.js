export const getWeather = async () => {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,uv_index_max,temperature_2m_max,temperature_2m_min,apparent_temperature_min,apparent_temperature_max,rain_sum,showers_sum,snowfall_sum,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,rain,wind_speed_10m,wind_speed_180m,temperature_180m,temperature_120m,temperature_80m,wind_speed_120m,wind_speed_80m,apparent_temperature,precipitation,precipitation_probability,showers,snowfall,dew_point_2m,relative_humidity_2m,weather_code,uv_index&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,precipitation,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit')
        if(!response.ok) {
            throw Error(`Fetch failed ${response.status} ${response.statusText}`);
        }
        const data = response.json();
        console.log(data);

        return {data: data, error: null}
    } catch (error) {
        console.log(error.message)
        return {data: null, error: error}
    }
}