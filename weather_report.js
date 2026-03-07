const https = require('https');

function getWeather() {
  return new Promise((resolve, reject) => {
    const url = 'https://wttr.in/Shenzhen?format=j1';
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const weather = JSON.parse(data);
          const current = weather.current_condition[0];
          const area = weather.nearest_area[0].areaName[0].value;
          const output = `
天气汇报 - ${area}
当前时间: ${weather.current_condition[0].observation_time}
温度: ${current.temp_C}°C (${current.temp_F}°F)
天气: ${current.weatherDesc[0].value}
湿度: ${current.humidity}%
风速: ${current.windspeedKmph} km/h
降雨概率: ${current.precipMM} mm
AQI: ${weather.air_quality[0].dominant_polluant} (${weather.air_quality[0].aqius} AQI)
          `.trim();
          resolve(output);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

getWeather().then(console.log).catch(console.error);
