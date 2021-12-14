//Order of details of the current day
const currentDayForecast = data => [
    {
        name: 'Predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'Humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'Air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'Max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'Min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;