<template>
    <div>
        <mozaika-component v-show="userData.customMozaika != true"></mozaika-component>
        <mozaikacustom-component v-show="userData.customMozaika === true"></mozaikacustom-component>
    </div>
</template>
<script>
import MozaikaComponent from "./MozaikaComponent";
import MozaikaCustomComponent from "./UserCustomMozaika";
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
        "mozaikacustom-component": MozaikaCustomComponent
    },
};
</script>
