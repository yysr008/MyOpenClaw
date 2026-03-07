// checkin.js
const greetings = [
  "你好呀！现在是整点/半点，记得休息一下，喝杯水哦~ 🌟",
  "时间过得真快呀，又是整点/半点了！愿你今天过得愉快~ 😊",
  "滴答滴答~ 又是一个整点/半点啦！记得照顾好自己哦！⏰",
  "整点/半点报时~ 希望此刻的你心情美丽如花！🌸",
  "嗨！又见面啦！整点/半点报时员在此为您服务~ 🎉"
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
console.log(randomGreeting);
