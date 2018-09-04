import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

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