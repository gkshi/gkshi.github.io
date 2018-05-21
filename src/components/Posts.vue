<template>
    <section class="posts">

        <template v-if="hasPosts()">
            <post v-for="post in $root.$children[0].posts" v-if="compareCategories(post.category)" :image="post.image" :url="post.url" :key="post.id">
                <div slot="title">{{ post.title }}</div>
                <div slot="descr">{{ post.descr }}</div>
                <div slot="category">{{ post.category }}</div>
                <div slot="date">{{ post.date }}</div>
            </post>
        </template>

        <div v-else>
            No posts
        </div>

    </section>
</template>

<script>
    import Post from "@/components/Post";

    export default {
        props: ['category'],

        methods: {
            hasPosts() {
                let posts = this.$root.$children[0].posts,
                    number = 0;

                for (let i = 0; i < posts.length; i++) {
                    if (this.compareCategories(posts[i].category)) {
                        number++;
                    }
                }

                return number;
            },
            compareCategories: function (cat) {
                return this.getCategory === cat || !this.category;
            }
        },

        computed: {
            getCategory: function() {
                return this.category ? this.category : 'all';
            }
        },

        components: {
            Post
        },

        mounted: function() {
            //console.log(this.$root.$children[0].posts);
        }
    }
</script>