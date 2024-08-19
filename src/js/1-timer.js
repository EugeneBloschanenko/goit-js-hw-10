

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const startBtn = document.querySelector('[data-start]');

startBtn.addEventListener('click', () => {
  const currentTime = Date.now();
  const initTime = currentTime + 2629800000; 
  setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    let d, h, m, s;
  d = Math.floor(diff / (1000 * 60 * 60 * 24));
  h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  s = Math.floor((diff % (1000 * 60)) / 1000);  
  s < 10 ? s = `0${s}`: s = `${s}`
  m < 10 ? m = `0${m}`: m = `${m}`
  h < 10 ? h = `0${h}` : h = `${h}`
  d < 10 ? d = `0${d}`: d = `${d}`
  console.log(`${d}:${h}:${m}:${s}`);
  }, 1000) 
});
