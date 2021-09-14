require('./bootstrap');

window.Vue = require('vue').default;

import swal from 'sweetalert2';
window.swal = swal;


import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.component('new-arrivals', require('./components/NewArrivals.vue').default);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});