import '../css/styles.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let selectedDate;
        let countdownInterval;

        document.addEventListener("DOMContentLoaded", function() {
            flatpickr("#datetime-picker", {
                enableTime: true,
                time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
                onChange: function(selectedDates, dateStr, instance) {
                    selectedDate = selectedDates[0];
                    const now = new Date();
                    const startButton = document.querySelector('[data-start]');

                    if (selectedDate <= now) {
                        startButton.disabled = true;
                        iziToast.error({
                            title: 'Error',
                            message: 'Please choose a date in the future',
                        });
                    } else {
                        startButton.disabled = false;
                    }
                }
            });

            document.querySelector('[data-start]').addEventListener('click', function() {
                this.disabled = true;
                startCountdown(selectedDate);
            });
        });

        function startCountdown(endDate) {
            clearInterval(countdownInterval);
            countdownInterval = setInterval(function() {
                const now = new Date();
                const timeRemaining = endDate - now;

                if (timeRemaining <= 0) {
                    clearInterval(countdownInterval);
                    updateTimerDisplay(0, 0, 0, 0);
                    return;
                }

                const time = convertMs(timeRemaining);
                updateTimerDisplay(time.days, time.hours, time.minutes, time.seconds);
            }, 1000);
        }

        function updateTimerDisplay(days, hours, minutes, seconds) {
            document.querySelector('[data-days]').textContent = formatTime(days);
            document.querySelector('[data-hours]').textContent = formatTime(hours);
            document.querySelector('[data-minutes]').textContent = formatTime(minutes);
            document.querySelector('[data-seconds]').textContent = formatTime(seconds);
        }

        function formatTime(unit) {
            return unit < 10 ? '0' + unit : unit;
        }

        function convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);
            const minutes = Math.floor(((ms % day) % hour) / minute);
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
        }



    


