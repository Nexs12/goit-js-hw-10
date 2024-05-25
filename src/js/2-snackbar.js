import '../css/styles.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(this.delay.value);
    const state = this.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            console.log(`✅ Fulfilled promise in ${delay}ms`);
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch((delay) => {
            console.log(`❌ Rejected promise in ${delay}ms`);
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
});