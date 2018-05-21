<template>
    <div class="social-buttons social-buttons--horizontal">
        <a href="https://vk.com/gkshi" target="_blank" class="social-button social-button--vk">George Shinkarev on VK</a>
        <a href="https://www.instagram.com/gkshi/" target="_blank" class="social-button social-button--instagram">George Shinkarev on Instagram</a>
        <a href="skype:gk.shi?chat" class="social-button social-button--skype">George Shinkarev on Skype</a>
        <a href="https://t.me/gk_shi" target="_blank" class="social-button social-button--telegram">George Shinkarev on Telegram</a>
        <a href="https://github.com/gkshi" target="_blank" class="social-button social-button--github">George Shinkarev on GitHub</a>
    </div>
</template>

<script>
    export default {
        name: "SocialButtons",

        methods: {
            //generateClass: function() {
            //    let class_default = 'social-buttons';
            //
            //    if (this.orientation) {
            //        return class_default + ' ' + class_default + '--' + this.orientation;
            //    }
            //    else {
            //        return class_default;
            //    }
            //}
        }
    }
</script>