import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    },
    methods: {
        test() {console.log('test');}
    }
})