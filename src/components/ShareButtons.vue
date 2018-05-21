<template>
    <div :class="generateClass()">
        <a :href="'https://vk.com/share.php?title=' + getTitle() + '&url=' + getUrl()" target="_blank" class="share-button share-button--vk">Share post via VK</a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + getUrl()" target="_blank" class="share-button share-button--facebook">Share post via Facebook</a>
        <a :href="'http://telegram.me/share/url?url=' + getUrl()" target="_blank" class="share-button share-button--telegram">Share post via Telegram</a>
        <!--<a href="#" class="share-button share-button&#45;&#45;plus">Share post via other social networks</a>-->
    </div>
</template>

<script>
    export default {
        name: "ShareButtons",
        props: ['orientation', 'title', 'page_url'],
        methods: {
            generateClass: function() {
                let default_class = 'share-buttons';

                if (this.orientation) {
                    return default_class + ' ' + default_class + '--' + this.orientation;
                }

                return default_class;

            },
            getTitle: function() {
                let semititle = 'George Shinkarev blog';
                if (this.title) {
                    return this.title + ' - ' + semititle;
                }
                return semititle;
            },
            getUrl: function() {
                return window.location.href;
                //return this.$route.path;
            }
        }
    }
</script>

<style scoped>

</style>