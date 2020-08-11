require('./bootstrap');

window.Vue = require('vue');

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';


import NavBarComponent from './components/NavBarComponent.vue';
let LoginComponent = () => import('./components/LoginComponent.vue');
let ChannelComponent = () => import('./components/Channel/ChannelComponent.vue');
// let MozaikaComponent  = () => import ('./components/Mozaika/MozaikaComponent.vue');
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
let ApiComponent = () => import('./components/settings/api/ApiComponent');
let UserApiComponent = () => import('./components/settings/api/UserApiComponent');
let IptvDokuComponent = () => import('./components/settings/api/IptvDokuComponent');
// let UserCustomMozaika = () => import('./components/Mozaika/UserCustomMozaika');
let MozaikaSelectionComponent = () => import('./components/Mozaika/MozaikaSelectionComponent');

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));


let routes = [
    {
        path: '/',
        component: NavBarComponent,
        children: [
            {
                path: '',
                component: MozaikaSelectionComponent,
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
                    },
                    {
                        path: '/settings/api/users',
                        component: ApiComponent,
                        children: [
                            {
                                path: '',
                                component: UserApiComponent
                            },
                            {
                                path: '/settings/api/iptv_doku',
                                component: IptvDokuComponent
                            }
                        ]
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

const router = new VueRouter({
    routes
})
const opts = {}
Vuetify.config.silent = true
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
