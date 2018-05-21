<template>
    <section class="slider-section">

        <div class="slider">
            <div class="slider__slides">
                <figure class="slide">
                    <router-link :to="'/post' + $root.$children[0].slider.main.url">
                        <figcaption class="slide__title slider-heading">
                            {{ $root.$children[0].slider.main.title }}
                        </figcaption>
                    </router-link>
                    <div class="slide__info text-small">
                        <span>{{ $root.$children[0].slider.main.category }}</span>
                        <span>{{ $root.$children[0].slider.main.date }}</span>
                    </div>
                    <div class="slide__image">
                        <img :src="$root.$children[0].domain + $root.$children[0].slider.main.image" :alt="$root.$children[0].slider.main.title">
                    </div>
                </figure>
            </div>
        </div>

        <router-link :to="'/post' + $root.$children[0].slider.advanced1.url" class="slide">
            <figure>
                <figcaption class="slide__title article-heading">
                    {{ $root.$children[0].slider.advanced1.title }}
                </figcaption>
                <div class="slide__info text-small">
                    <span>{{ $root.$children[0].slider.advanced1.category }}</span>
                    <span>{{ $root.$children[0].slider.advanced1.date }}</span>
                </div>
                <div class="slide__image">
                    <img :src="$root.$children[0].domain + $root.$children[0].slider.advanced1.image" :alt="$root.$children[0].slider.main.title">
                </div>
            </figure>
        </router-link>

        <router-link :to="'/post' + $root.$children[0].slider.advanced1.url" class="slide">
            <figure>
                <figcaption class="slide__title article-heading">
                    {{ $root.$children[0].slider.advanced2.title }}
                </figcaption>
                <div class="slide__info text-small">
                    <span>{{ $root.$children[0].slider.advanced2.category }}</span>
                    <span>{{ $root.$children[0].slider.advanced2.date }}</span>
                </div>
                <div class="slide__image">
                    <img :src="$root.$children[0].domain + $root.$children[0].slider.advanced2.image" :alt="$root.$children[0].slider.main.title">
                </div>
            </figure>
        </router-link>

    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>