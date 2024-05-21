import '../css/styles.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.error({
    title: 'Error',
    message: 'Illegal operation',
    overlayColor: 'rgba(181, 27, 27, 0.6)',
    position: 'topRight'
});
