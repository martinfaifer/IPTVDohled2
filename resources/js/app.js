require('./bootstrap');

window.Vue = require('vue');

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { store } from './store/store';


import NavBarComponent from './components/NavBarComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import ChannelComponent from './components/Channel/ChannelComponent.vue';
import ChannelsComponent from './components/settings/ChannelsComponent.vue';
import ChartsComponent from './components/settings/ChartsComponent.vue';
import DashBoardComponent from './components/settings/DashBoardComponent.vue';
import SettingsComponent from './components/settings/SettingsComponent.vue';
import UsersComponent from './components/settings/UsersComponent.vue';
import AlertSettingsComponent from './components/settings/AlertsComponents/AlertSettingsComponent.vue';
import LogComponent from './components/settings/logs/LogComponent.vue';
import DeviceComponent from './components/settings/devices/DeviceComponent';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import CalendarComponent from './components/calendar/CalendarComponent';
import ApiComponent from'./components/settings/api/ApiComponent';
import UserApiComponent from './components/settings/api/UserApiComponent';
import IptvDokuComponent from './components/settings/api/IptvDokuComponent';
import MozaikaSelectionComponent from './components/Mozaika/MozaikaSelectionComponent';

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
    store,
    router,
    vuetify: new Vuetify({
        theme: {
            dark: true,
        },
        opts
    })
});
