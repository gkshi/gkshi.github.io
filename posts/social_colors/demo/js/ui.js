var UI = function () {
    // Определение переменных
    var
        $social = $('.social'),
        $colorPreview = $('.social .social-color-input span'),
        $colorTitle = $('.social .social-color-title'),
        $textInput = $('input[type="text"]'),

        $octothorpe = $('.octothorpe');

    // Функции
    function shadeColor(color, percent) {  // deprecated. See below.
        var num = parseInt(color.slice(1), 16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    function copyToClipboard(network, color, content) {

        var colorName = '';

        switch (color) {
            case 'main':
                colorName = 'Главный';
                break;

            case 'light':
                colorName = 'Светлый';
                break;

            case 'dark':
                colorName = 'Тёмный';
                break;

            default:
                break;
        }

        $(content).select();
        try {
            document.execCommand('copy');
            if (colorName.length > 0) {
                noty({
                    text: colorName + ' цвет ' + network + ' скопирован',
                    timeout: 4000
                });
            }
            else {
                noty({
                    text: color + ' color of the ' + network + ' copied',
                    timeout: 4000
                });
            }
        } catch (err) {
            console.log('copy error');
        }
        return false;
    }

    // Обработчики событий
    function addListeners() {

        $textInput.on('click', function () {
            var network = $(this).closest('.social').find('.social__name').text();
            var color = $(this).parent().parent().attr('class').slice(8, -6);
            $(this).select();
            copyToClipboard(network, color, $(this).val());
            return false;
        });

        $colorTitle.on('click', function () {
            var network = $(this).closest('.social').find('.social__name').text();
            var color = $(this).parent().attr('class').slice(8, -6);
            $(this).next().find('input').select();
            copyToClipboard(network, color, $(this).next().find('input').val());
        });

        $colorPreview.on('click', function () {
            var network = $(this).closest('.social').find('.social__name').text();
            var color = $(this).parent().parent().attr('class').slice(8, -6);
            $(this).next().select();
            copyToClipboard(network, color, $(this).next().val());
            return false;
        });

        $octothorpe.on('click', function () {
            if ($(this).attr('data-status') == '1') {
                localStorage.setItem('octothorpe', '0');
                $(this).attr('data-status', '0');
                $(this).find('span').text('Добавить');
                $textInput.each(function () {
                    var valWithoutOctothorpe = $(this).val().slice(1);
                    $(this).val(valWithoutOctothorpe);
                });
            }
            else {
                localStorage.setItem('octothorpe', '1');
                $(this).attr('data-status', '1');
                $(this).find('span').text('Убрать');
                $textInput.each(function () {
                    var valWithoutOctothorpe = '#' + $(this).val();
                    $(this).val(valWithoutOctothorpe);
                });
            }
            return false;
        });

    }

    function init() {

        $social.each(function () {
            var mainColor = $(this).attr('data-color').toLowerCase();
            var lightColor = shadeColor(mainColor, 10);
            var darkColor = shadeColor(mainColor, -10);

            $(this).find('.social__main-color .social-color-input span').css({
                background: mainColor
            });
            $(this).find('.social__light-color .social-color-input span').css({
                background: lightColor
            });
            $(this).find('.social__dark-color .social-color-input span').css({
                background: darkColor
            });

            $(this).find('.social__main-color input').val(mainColor);
            $(this).find('.social__light-color input').val(lightColor);
            $(this).find('.social__dark-color input').val(darkColor);
        });

        if (localStorage.getItem('octothorpe') == '0') {
            $textInput.each(function () {
                var valWithoutOctothorpe = $(this).val().slice(1);
                $(this).val(valWithoutOctothorpe);
            });
            $octothorpe.attr('data-status', '0');
            $octothorpe.find('span').text('Добавить');
        }

        addListeners();
    }

    return {
        init: init
    }

}();

// Инициализация UI по готовности страницы
$(document).ready(function () {
    UI.init();
});