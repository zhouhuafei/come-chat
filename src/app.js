import Vue from 'vue';
import app from './app.vue';

// 公共的样式
require('./scss/commons/common.scss');

setTimeout(function () {
    new Vue({
        el: '#app',
        template: '<app></app>',
        components: {app},
    });
}, 0);
