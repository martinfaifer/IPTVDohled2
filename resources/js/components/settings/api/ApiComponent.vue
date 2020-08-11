<template>
    <div>
        <br />
        <!-- menu -->
        <aside>
            <div class="mt-12">
                <v-navigation-drawer
                    color="transparent"
                    class="mt-12"
                    absolute
                    permanent
                    left
                >
                    <v-list class="mt-6 body-1">
                        <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                            v-bind:to="item.url"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{
                                    item.title
                                }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </div>
        </aside>

        <!-- content -->
        <v-content class="rightFromSIdePanel body-1">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Přehled uživatelů",
                    icon: "mdi-account-group-outline",
                    url: "/settings/api/users"
                },
                {
                    title: "IPTV Dokumentace API",
                    icon: "mdi-swap-horizontal",
                    url: "/settings/api/iptv_doku"
                }
            ]
        };
    }
};
</script>
