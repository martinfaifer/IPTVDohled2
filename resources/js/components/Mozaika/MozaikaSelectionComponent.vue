<template>
    <div>
        <mozaika-component v-show="userData.customMozaika != true && userData.zabbixView != true"></mozaika-component>
        <mozaikacustom-component v-show="userData.customMozaika === true"></mozaikacustom-component>
        <zabbixview-component v-show="userData.zabbixView === true"></zabbixview-component>
    </div>
</template>
<script>
import MozaikaComponent from "./MozaikaComponent";
import MozaikaCustomComponent from "./UserCustomMozaika";
import ZabbixViewComponent from "./zabbixViewComponent";
export default {
    computed: {
        userData() {
            return this.$store.state.userData;
        }
    },
    data() {
        return {
        };
    },
    components: {
        "mozaika-component": MozaikaComponent,
        "mozaikacustom-component": MozaikaCustomComponent,
        "zabbixview-component":ZabbixViewComponent
    },
};
</script>
