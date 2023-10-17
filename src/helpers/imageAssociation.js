import sunny from '../assets/sunny.png';
import clearSky from '../assets/clear-sky.png';
import windy from '../assets/windy.png';
import cloud from '../assets/cloud.png';
import cloudyDay from '../assets/cloudy-day.png';
import downpour from '../assets/downpour.png';
import snowfall from '../assets/snowfall.png';
import darkAndStormy from '../assets/dark-and-stormy.png';
import rain from '../assets/rain.png';

const imageAssociation = (code) => {
  const associations = [
    { "code": 1000, "img": sunny },
    { "code": 1003, "img": clearSky},
    { "code": 1006, "img": cloud },
    { "code": 1009, "img": cloud },
    { "code": 1030, "img": cloudyDay },
    { "code": 1063, "img": cloudyDay },
    { "code": 1066, "img": snowfall },
    { "code": 1069, "img": darkAndStormy },
    { "code": 1072, "img": cloud },
    { "code": 1087, "img": cloudyDay },
    { "code": 1114, "img": windy },
    { "code": 1117, "img": darkAndStormy },
    { "code": 1135, "img": cloud },
    { "code": 1147, "img": cloud },
    { "code": 1150, "img": downpour },
    { "code": 1153, "img": downpour },
    { "code": 1168, "img": darkAndStormy },
    { "code": 1171, "img": darkAndStormy },
    { "code": 1180, "img": rain },
    { "code": 1183, "img": rain },
    { "code": 1186, "img": rain },
    { "code": 1189, "img": rain },
    { "code": 1192, "img": darkAndStormy },
    { "code": 1195, "img": darkAndStormy },
    { "code": 1198, "img": darkAndStormy },
    { "code": 1201, "img": darkAndStormy },
    { "code": 1204, "img": snowfall },
    { "code": 1207, "img": snowfall },
    { "code": 1210, "img": snowfall },
    { "code": 1213, "img": snowfall },
    { "code": 1216, "img": snowfall },
    { "code": 1219, "img": snowfall },
    { "code": 1222, "img": snowfall },
    { "code": 1225, "img": snowfall },
    { "code": 1237, "img": snowfall },
    { "code": 1240, "img": rain },
    { "code": 1243, "img": rain },
    { "code": 1246, "img": rain },
    { "code": 1249, "img": darkAndStormy },
    { "code": 1252, "img": darkAndStormy },
    { "code": 1255, "img": snowfall },
    { "code": 1258, "img": snowfall },
    { "code": 1261, "img": darkAndStormy },
    { "code": 1264, "img": darkAndStormy },
    { "code": 1273, "img": darkAndStormy },
    { "code": 1276, "img": darkAndStormy },
    { "code": 1279, "img": snowfall },
    { "code": 1282, "img": snowfall }
  ];

  const association = associations.find(item => item.code === code);

  return association ? association.img : sunny;
};

export default imageAssociation;
