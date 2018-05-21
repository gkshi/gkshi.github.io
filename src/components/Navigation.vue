<template>
    <nav class="menu">

        <router-link v-for="category in $root.$children[0].categories" :to="category.url" :class="getClass(category.alias)" :key="category.id">
            {{ category.title }}
        </router-link>

    </nav>
</template>

<script>
    export default {
        name: 'Navigation',

        props: ['active'],

        methods: {
            getClass: function(alias) {
                let class_default = "menu__item",
                    class_active = class_default + " " + class_default + "--active";

                if (this.active) {
                    if (alias === this.active) {
                        return class_active;
                    }
                }

                return class_default;
            }
        },

        mounted: function() {
            // this.$root.$children[0]
            // это обращение к родительскому App компоненту
        }
    }
</script>