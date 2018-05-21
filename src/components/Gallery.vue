<template>
    <div class="gallery">
        <div class="gallery__arrows">
            <div class="gallery__arrow-left" @click.prevent="scrollLeft()">&lt;</div>
            <div class="gallery__arrow-right" @click.prevent="scrollRight()">&gt;</div>
        </div>
        <div class="gallery__items" ref="slides">
            <div v-for="image in images" class="gallery__item" :key="image.id">
                <img :src="$root.$children[0].domain + image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",

        props: ["images"],

        data: function () {
            return {
                slides: {
                    total: this.images.length,
                    current: 1
                },
            }
        },

        methods: {

            scrollRight: function() {
                if (this.slides.total - this.slides.current < 1) {
                    return;
                }

                // Scroll
                let width = 0;
                for (let i = 0; i < this.slides.current; i++) {
                    width += this.$refs.slides.children[i].offsetWidth;
                }
                this.$refs.slides.style = 'transform: translate(-' + width + 'px, 0)';

                // Counts
                this.slides.current++;
            },

            scrollLeft: function() {
                if (this.slides.current < 2) {
                    return;
                }

                // Counts
                this.slides.current--;

                // Scroll
                let width = 0;
                for (let i = 1; i < this.slides.current; i++) {
                    width += this.$refs.slides.children[i].offsetWidth;
                }
                this.$refs.slides.style = 'transform: translate(-' + width + 'px, 0)';
            }

        }
    }
</script>

<style scoped>

</style>