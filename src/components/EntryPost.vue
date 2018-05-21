<template>
    <div class="entry-post">

        <header class="header dark">
            <div class="intro">
                <div class="logo logo--compact">
                    <router-link to="/">GS</router-link>
                </div>
                <navigation :active="post.category"></navigation>
            </div>
        </header>

        <div class="loading" v-if="loading">
            <main>
                <div class="intro">
                    <div class="block">
                        Загрузка...
                    </div>
                </div>
            </main>
        </div>

        <div v-if="error" class="entry-post__error">
            <main>
                <div class="intro">
                    <div class="block">
                        <h1 class="entry-post__title heading1">
                            {{ error }}
                        </h1>
                        <div class="entry-post__descr text-regular">
                            Файл с постом не найден.
                            Попробуйте <router-link to="/">вернуться на главную</router-link>.
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <section v-else>

            <header class="entry-post__header">
                <div class="intro">

                    <div class="block relative">

                        <share-buttons orientation="vertical" :title="post.title"></share-buttons>

                        <h1 class="entry-post__title heading1">
                            {{ post.title }}
                        </h1>

                        <div class="entry-post__descr text-regular">
                            {{ post.descr }}
                        </div>

                        <div class="entry-post__info text-small">
                            <div>{{ $root.$children[0].getCategoryName(post.category) }}</div>
                            <div>{{ post.date }}</div>
                        </div>

                        <!--<div class="entry-post__author text-notice">-->
                            <!--от Георгия Шинкарева-->
                        <!--</div>-->

                    </div>

                    <div v-if="post.image" class="entry-post__image-block">
                        <div class="entry-post__image">
                            <img :src="$root.$children[0].domain + post.image" :alt="post.title">
                        </div>
                        <div class="text-notice">
                            Иллюстрация от Георгия Шинкарева
                        </div>
                    </div>

                </div>
            </header>

            <main>

                <div v-if="post.buttons" class="entry-post__buttons">
                    <a v-for="button in post.buttons" :href="button.url" class="button" target="_blank" :key="button.id">
                        {{ button.title }}
                    </a>
                </div>

                <div class="intro">

                    <div class="entry-post__content" v-if="post.body">

                        <template v-for="element in post.body">

                            <!-- heading -->
                            <div v-if="element.type === 'heading'" class="block heading">
                                <h3 class="heading3">
                                    {{ element.content }}
                                </h3>
                            </div>
                            <!-- end of heading -->

                            <!-- regular text block -->
                            <div v-if="element.type === 'text'" class="block text-regular">
                                {{ element.content }}
                            </div>
                            <!-- end of regular text block -->

                            <!-- info block -->
                            <div v-if="element.type === 'info'" class="block text-regular">
                                <div class="info">
                                    {{ element.content }}
                                </div>
                            </div>
                            <!-- end of info block -->

                            <!-- list -->
                            <div v-if="element.type === 'list'" class="block">
                                <ul class="list">
                                    <li v-for="item in element.content" class="list__item">{{ item }}</li>
                                </ul>
                            </div>
                            <!-- end of list -->

                            <!-- code block -->
                            <div v-if="element.type === 'code'" class="block">
                                <pre class="code"><code>{{ element.content }}</code></pre>
                            </div>
                            <!-- end of code block -->

                            <!-- image gallery -->
                            <gallery v-if="element.type === 'gallery'" :images="element.content"></gallery>
                            <!-- end of image gallery -->

                            <!-- space -->
                            <div v-if="element.type === 'space'" class="space"></div>
                            <!-- end of space -->

                        </template>

                    </div>

                </div>

            </main>

            <footer class="entry-post__footer">
                <div class="block">
                    <share-buttons></share-buttons>

                    <div class="entry-post__info entry-post__info--bottom text-small">
                        <div>{{ $root.$children[0].getCategoryName(post.category) }}</div>
                        <div>{{ post.date }}</div>
                    </div>
                </div>
            </footer>

        </section>

        <base-footer></base-footer>

    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import BaseFooter from '@/components/BaseFooter'
    import SocialButtons from '@/components/SocialButtons'
    import ShareButtons from '@/components/ShareButtons'
    import Gallery from '@/components/Gallery'

    export default {
        name: 'EntryPost',

        data() {
            return {
                loading: true,
                error: null,
                post: {},
            }
        },

        methods: {
            updatePost(post) {
                this.post = post;
            },
        },

        created: function () {

            this.loading = true;
            this.error = null;
            this.post = {};

            fetch(this.$root.$children[0].domain + '/posts/' + this.$route.params.id + '/index.json')
            .then((response) => {
                if(response.ok) {
                    //console.log(response);
                    return response.json();
                }

                this.loading = false;
                this.error = '404 файл не найден';
                throw new Error('404 файл не найден');
            })
            .then((json) => {
                //console.log(json);

                this.loading = false;
                this.updatePost(json);

            })
            .catch((error) => {
                this.loading = false;
                this.error = '404 файл не найден';
                throw new Error('404 файл не найден');
            });

            //this.loading = false;
            //this.error = null;
            //let post = {
            //    "title": "Игра в города",
            //    "descr": "Сыграйте в города с ботом. Названные города ищутся с помощью API Яндекс.Карт, после чего отмечаются на карте. Бот имеет ограниченный словарный запас.",
            //    "category": "javascript",
            //    "date": "13 февраля 2018",
            //    "image": "/posts/cities_game/images/index.png",
            //    "buttons": [
            //        {
            //            "title": "Демонстрация",
            //            "url": "http://gkshi.ucoz.net/cities"
            //        },
            //        {
            //            "title": "Github",
            //            "url": "https://github.com/gkshi/cities"
            //        }
            //    ],
            //    "body": [
            //        {
            //            "type": "heading",
            //            "content": "Правила:"
            //        },
            //        {
            //            "type": "text",
            //            "content": "Основы правил взяты из Википедии. Игрок и бот по очереди называют города. Начинает игрок."
            //        },
            //        {
            //            "type": "heading",
            //            "content": "Реализация:"
            //        },
            //        {
            //            "type": "text",
            //            "content": "Названный город ищем на карте с помощью API Яндекс.Карт. Если он найден, то ставим метку на карте, вычеркиваем город из словарного запаса противника и передаем ход."
            //        }
            //    ]
            //};
            //this.updatePost(post);

            //console.log(this.error);

        },

        components: {
            Navigation,
            BaseFooter,
            SocialButtons,
            ShareButtons,
            Gallery
        }
    }
</script>