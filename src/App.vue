<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',

        methods: {
            getCategoryName: function(alias) {
                let category_title = alias;

                this.$root.$children[0].categories.forEach(function(category) {
                    if (category.alias === alias) {
                        category_title = category.title;
                        return;
                    }
                });

                return category_title;
            }
        },

        data: function() {
            return {

                domain: "",

                // categories
                categories: [
                    {
                        alias: "index",
                        url: "/",
                        title: "Все посты"
                    },
                    {
                        alias: "websites",
                        url: "/websites",
                        title: "Шаблоны для сайтов"
                    },
                    {
                        alias: "javascript",
                        url: "/javascript",
                        title: "JavaScript"
                    },
                    {
                        alias: "design",
                        url: "/design",
                        title: "UX/UI Дизайн"
                    },
                    {
                        alias: "useful",
                        url: "/useful",
                        title: "Полезные ресурсы"
                    }
                ],

                posts: [
                    {
                        url: "/cities_game",
                        image: "/posts/cities_game/images/index.png",
                        title: "Игра в города",
                        descr: "Сыграйте в города с ботом. Названные города ищутся с помощью API Яндекс.Карт, после чего отмечаются на карте. Бот имеет ограниченный словарный запас.",
                        category: "javascript",
                        date: "13 февраля 2018"
                    },
                    {
                        url: "/selfline",
                        image: "/posts/selfline/images/index.png",
                        title: "Selfline",
                        descr: "Чистый и компактный код даёт минимальное время загрузки сайта. Плавная анимация будет радовать глаз всех посетителей. Responsive-шаблон ...",
                        category: "websites",
                        date: "29 августа 2016"
                    },
                    {
                        url: "/business_landing",
                        image: "/posts/business_landing/images/index.png",
                        title: "Business landing #1",
                        descr: "Полностью адаптивный и кроссбраузерный лендинг бизнес-тематики, в котором нет ничего лишнего.",
                        category: "websites",
                        date: "10 ноября 2015"
                    }
                ],

                slider: {
                    main: {
                        url: "/cities_game",
                        image: "/posts/cities_game/images/index.png",
                        title: "Игра в города",
                        category: "javascript",
                        date: "29 августа 2016"
                    },
                    advanced1: {
                        url: "/selfline",
                        image: "/posts/selfline/images/index.png",
                        title: "Selfline",
                        category: "websites",
                        date: "29 августа 2016"
                    },
                    advanced2: {
                        url: "/business_landing",
                        image: "/posts/business_landing/images/index.png",
                        title: "Business landing #1",
                        category: "websites",
                        date: "29 августа 2016"
                    }
                },

            }
        },

        mounted: function() {

            if (process.env.NODE_ENV === 'development') {
                this.domain = 'http://vue.ucoz.net';
            }

            //console.log(process.env.NODE_ENV);
        }
    }
</script>