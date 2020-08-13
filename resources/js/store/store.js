import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userData: [],
        channelAlerts: [],
        deviceAlerts: [],
    },
    actions: {

    },
    mutations: {
      update (state, user) {
        state.userData = user;
      },
      updateDeviceAlerts (state, deviceAlerts) {
        state.deviceAlerts = deviceAlerts;
      },

    },
    getters: {

    }
});
