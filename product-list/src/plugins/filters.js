import Vue from 'vue'

Vue.filter('currency', (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num))
