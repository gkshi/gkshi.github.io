<template>
    <article class="post">

        <router-link :to="'/post' + url">
            <figure class="post__figure">
                <div class="post__image">
                    <img :src="$root.$children[0].domain + image" alt="">
                </div>
                <figcaption class="post__title">
                    <h2 class="article-heading">
                        <slot name="title"></slot>
                    </h2>
                </figcaption>
            </figure>
        </router-link>

        <div class="post__text article-text">
            <slot name="descr"></slot>
        </div>

        <div class="post__info text-small">
            <slot name="category"></slot>
            <slot name="date"></slot>
        </div>

    </article>
</template>

<script>
    export default {
        name: 'Post',

        props: ['url', 'image']
    }
</script>