require('./bootstrap');

window.Vue = require('vue');

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import Vuetify from 'vuetify';

import VueRouter from 'vue-router';


import NavBarComponent from './components/NavBarComponent.vue';
let LoginComponent = () => import('./components/LoginComponent.vue');
let ChannelComponent = () => import('./components/Channel/ChannelComponent.vue');
let MozaikaComponent  = () => import ('./components/Mozaika/MozaikaComponent.vue');
let ChannelsComponent = () => import('./components/settings/ChannelsComponent.vue');
let ChartsComponent = () => import('./components/settings/ChartsComponent.vue');
let DashBoardComponent = () => import( './components/settings/DashBoardComponent.vue');
let SettingsComponent = () => import('./components/settings/SettingsComponent.vue');
let UsersComponent = () => import('./components/settings/UsersComponent.vue');
let AlertSettingsComponent = () => import('./components/settings/AlertsComponents/AlertSettingsComponent.vue');
let LogComponent = () => import( './components/settings/logs/LogComponent.vue');
let DeviceComponent = () => import( './components/settings/devices/DeviceComponent');
let PageNotFoundComponent = () => import( './components/PageNotFoundComponent');
let CalendarComponent = () => import( './components/calendar/CalendarComponent');


// midleware
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));



// routing
let routes = [
    {
        path: '/',
        component: NavBarComponent,
        children: [
            {
                path: '',
                component: MozaikaComponent,
            },
            {
                path: '/channel/:id',
                component: ChannelComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },

            {
                path: '/settings/dashboard',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: DashBoardComponent
                    },
                    {
                        path: '/settings/channels',
                        component: ChannelsComponent
                    },
                    {
                        path: '/settings/channels/:id/charts',
                        component: ChartsComponent
                    },
                    {
                        path: '/settings/users',
                        component: UsersComponent
                    },
                    {
                        path: '/settings/alerts',
                        component: AlertSettingsComponent
                    },
                    {
                        path: '/settings/logs',
                        component: LogComponent
                    },
                    {
                        path: '/settings/devices',
                        component: DeviceComponent
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '*',
        component: PageNotFoundComponent
    },
];

// definice konstant
const router = new VueRouter({
    routes
})
const opts = {}

//module.export
const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: true,
        },
        opts
    })
});
