import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.less'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    // ES5 语法
    // render: function (createElement) {
    //     return createElement(App);
    // }

    // ES6 语法
    render: (h) => h(App)
}).$mount(root)