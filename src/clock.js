const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".time1");
clockTitle2 = clockContainer.querySelector(".time2");
clockToday = clockContainer.querySelector("p");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clockTitle2.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getToday() {
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const date = new Date();
  clockToday.innerText = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${week[date.getDay()]}요일`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
  getToday();
}

init();
