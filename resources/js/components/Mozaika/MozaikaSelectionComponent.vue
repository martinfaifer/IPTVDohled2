<template>
    <div>
        <mozaika-component v-show="userData.customMozaika != true"></mozaika-component>
        <mozaikacustom-component v-show="userData.customMozaika === true"></mozaikacustom-component>
    </div>
</template>
<script>
let MozaikaComponent = () => import("./MozaikaComponent");
let MozaikaCustomComponent = () => import("./UserCustomMozaika");
export default {
    data() {
        return {
            userData: []
        };
    },
    created() {
        this.loadUser();
    },
    components: {
        "mozaika-component": MozaikaComponent,
        "mozaikacustom-component": MozaikaCustomComponent
    },
    methods: {
        loadUser() {
            let currentObj = this;
            axios.get("/api/user/get").then(function(response) {
                if (response.data.stat === "error") {
                    currentObj.$router.push("/login");
                } else {
                    currentObj.userData = response.data;
                }
            });
        }
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.loadUser();
            }.bind(this),
            10000
        );
    }
};
</script>
