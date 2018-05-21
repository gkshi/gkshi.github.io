<template>
    <div>
        <header-main></header-main>

        <main>

            <div class="intro">
                <slider></slider>

                <div class="section-title article-heading">
                    Последние посты
                </div>
            </div>

            <div class="light-gray">
                <div class="intro">
                    <posts></posts>
                </div>
            </div>

        </main>

        <base-footer></base-footer>
    </div>
</template>

<script>
    import Slider from '@/components/Slider'
    import HeaderMain from '@/components/HeaderMain'
    import Posts from '@/components/Posts'
    import BaseFooter from '@/components/BaseFooter'

    export default {
        name: 'MainPage',

        components: {
            Slider,
            HeaderMain,
            Posts,
            BaseFooter
        },

        mounted: function() {
            //console.log(this.$parent.tempkey);
        }
    }
</script>