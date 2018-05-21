<template>
    <footer class="footer">
        <div class="intro">

            <div class="logo">
                George Shinkarev
            </div>

            <navigation scroll-top="true"></navigation>

            <div class="space"></div>

            <social-buttons></social-buttons>

            <div class="copyright">
                &copy; 2018 George Shinkarev blog. Made from the heart ♥
            </div>

        </div>
    </footer>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import SocialButtons from '@/components/SocialButtons'

    export default {
        name: 'Footer',

        components: {
            Navigation,
            SocialButtons
        }
    }
</script>