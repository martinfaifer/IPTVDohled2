require('./bootstrap');

window.Vue = require('vue');

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import Vuetify from 'vuetify';

import VueRouter from 'vue-router';

import LoginComponent from './components/LoginComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import ChannelComponent from './components/Channel/ChannelComponent.vue';
import MozaikaComponent from './components/Mozaika/MozaikaComponent.vue';
import ChannelsComponent from './components/settings/ChannelsComponent.vue';
import ChartsComponent from './components/settings/ChartsComponent.vue';
import DashBoardComponent from './components/settings/DashBoardComponent.vue';
import SettingsComponent from './components/settings/SettingsComponent.vue';
import UsersComponent from './components/settings/UsersComponent.vue';
import AlertSettingsComponent from './components/settings/AlertsComponents/AlertSettingsComponent.vue';
import LogComponent from './components/settings/logs/LogComponent.vue';


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
                path: '/settings',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: DashBoardComponent
                    },
                    {
                        path: 'channels',
                        component: ChannelsComponent
                    },
                    {
                        path: 'channels/:id/charts',
                        component: ChartsComponent
                    },
                    {
                        path: 'users',
                        component: UsersComponent
                    },
                    {
                        path: 'alerts',
                        component: AlertSettingsComponent
                    },
                    {
                        path: 'logs',
                        component: LogComponent
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: LoginComponent
    },
    // {
    //     path: '*',
    //     component: PageNotFoundComponent
    // },
];


// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;

var pusher = new Pusher('7eb4240a3bb1b22d6a10', {
    cluster: 'eu',
    forceTLS: false
});

var channel = pusher.subscribe('kanals');
channel.bind('SendDesktopAlert', function (data) {
    app.messages.push(JSON.stringify(data));
});


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
