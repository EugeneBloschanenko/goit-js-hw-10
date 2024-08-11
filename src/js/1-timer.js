

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
  const initTime = Date.now(); 
  setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - initTime;
  let h,m,s;
  h = Math.floor(diff/1000/60/60);
  m = Math.floor((diff/1000/60/60 - h)*60);
  s = Math.floor(((diff/1000/60/60 - h)*60 - m)*60);  
  s < 10 ? s = `0${s}`: s = `${s}`
  m < 10 ? m = `0${m}`: m = `${m}`
  h < 10 ? h = `0${h}`: h = `${h}`
  console.log(`${h}:${m}:${s}`);
  }, 1000)
  


  
});
