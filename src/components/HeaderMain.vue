<template>
    <header class="header">
        <div class="intro">

            <h1 class="logo">
                <router-link to="/">George Shinkarev</router-link>
            </h1>

            <navigation></navigation>

            <div class="space"></div>

        </div>
    </header>
</template>

<script>
    import Navigation from '@/components/Navigation'

    export default {
        name: 'HeaderMain',

        components: {
            Navigation
        }
    }
</script>