<template>
    <div class="content">
        <header-main></header-main>

        <div class="light-gray">
            <div class="intro">
                <posts :category="$route.params.category"></posts>
            </div>
        </div>

        <base-footer></base-footer>
    </div>
</template>

<script>
    import HeaderMain from '@/components/HeaderMain'
    import Posts from '@/components/Posts'
    import BaseFooter from '@/components/BaseFooter'

    export default {
        name: 'Category',

        data() {
            return {
                isValid: true,
                categories: ['/websites', '/javascript']
            }
        },

        beforeRouteUpdate (to, from, next) {
            this.categories.includes(to.path)
                ? this.isValid = true
                : this.isValid = false;

            next();
        },

        components: {
            HeaderMain,
            Posts,
            BaseFooter
        }
    }
</script>