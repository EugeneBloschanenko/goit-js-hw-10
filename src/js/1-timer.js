

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedTime = null;
let intervalId = null; 

startBtn.disabled = true;
stopBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      selectedTime = selectedDates[0];
      startBtn.disabled = false;
    } else {
      iziToast.error({
    title: 'Будь ласка, оберіть час у майбутньому!',
    message: '',
    position: 'topCenter'
    });
      startBtn.disabled = true; 
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {

  startBtn.disabled = true
  stopBtn.disabled = false;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = selectedTime - currentTime;

   if (diff <= 0) {
      clearInterval(intervalId);
     startBtn.disabled = true;
     stopBtn.disabled = true;
     iziToast.success({
       title: 'Відлік успішно завершено!',
       message:'',
       position: 'topCenter'
    });
      return;
    };

    let d, h, m, s;
  d = Math.floor(diff / (1000 * 60 * 60 * 24));
  h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  s = Math.floor((diff % (1000 * 60)) / 1000);  
  s < 10 ? s = `0${s}`: s = `${s}`
  m < 10 ? m = `0${m}`: m = `${m}`
  h < 10 ? h = `0${h}`: h = `${h}`
  d < 10 ? d = `0${d}`: d = `${d}`
    // console.log(`${d}:${h}:${m}:${s}`);
    timerDisplay(d, h, m, s);
  }, 1000) 
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  timerDisplay(0, 0, 0, 0);
  stopBtn.disabled = true;
  iziToast.warning({
    title: 'Відлік зупинено!',
    message: '',
    position: 'topCenter'
  })
});

function timerDisplay(d, h, m, s) {
  daysEl.textContent = String(d).padStart(2, "0");
  hoursEl.textContent = String(h).padStart(2, "0");
  minutesEl.textContent = String(m).padStart(2, "0");
  secondsEl.textContent = String(s).padStart(2, "0");
}