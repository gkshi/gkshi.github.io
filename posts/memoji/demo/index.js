// Главный класс игры
class Game {
    constructor(element, totalCards) {
        // Основная конфигурация игры
        this.cards = {};
        this.cards.total = Number(totalCards);
        this.cards.opened = 0;
        this.cards.success = 0;

        this.element = element;

        // Конфигурация таймера
        this.timer = {};
        this.timer.isActive = false;
        this.timer.seconds = 60;
        this.timer.function = '';

        // Список emoji для карточек
        this.emoji = ['cat', 'rabbit', 'octopus', 'crab', 'squirrel', 'cow'];

        this.emojiExpand();

        let _this = this;

        // Создаем главный обработчик кликов по карточкам
        this.element.addEventListener('click', function(e) {
            let cardElement = e.target;

            // Логика определения карточки, в которую был клик
            while(cardElement !== _this.element) {
                if (cardElement.classList.contains('card')) {
                    break;
                }
                cardElement = cardElement.parentNode;
            }

            if (cardElement.classList.contains('card')) {
                let card;

                // Ищем объект, связанный с DOM-элементом
                for (let i = 1; i <= Memoji.cards.total; i++) {
                    if (window ['Card' + i].element === cardElement) {
                        card = window ['Card' + i];
                        break;
                    }
                }

                if (card.state) {
                    // Выполняем нужные действия для карточки
                    switch(card.state) {
                        case 'default':
                            card.open();
                            break;

                        case 'opened':
                            card.close();
                            break;

                        default:
                            break;
                    }
                }

            }

        });
    }

    // Функция, которая начинает игру
    start() {
        let _this = this,
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');

        minutes.textContent = '00';
        seconds.textContent = --_this.timer.seconds;

        this.timer.isActive = true;

        // Запускаем таймер, работаем с секундами
        this.timer.function = setInterval(function() {
            let textSeconds = --_this.timer.seconds;
            if (_this.timer.seconds < 10) {
                textSeconds = '0' + textSeconds;
            }
            seconds.textContent = textSeconds;
            if (_this.timer.seconds < 1) {
                _this.end('lose');
            }
        }, 1000);
        return this;
    }

    // Функция, которая перезапускает игру
    restart() {
        let body = document.querySelector('body'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');

        // Скрываем модальное окно
        body.classList.remove('opened-modal');

        // Выставляем настройки по умолчанию
        this.cards.opened = 0;
        this.cards.success = 0;

        this.timer.seconds = 60;

        // Удаляем прошлые объекты карточек
        for(let i = 1; i <= Memoji.cards.total; i++) {
            delete window ['Card' + i];
        }

        this.emojiExpand();

        minutes.textContent = '01';
        seconds.textContent = '00';

        // Заново пересоздаем объекты карточек
        Array.from(this.element.children).forEach(function(card, index) {
            card.classList.remove('card--opened');
            card.classList.remove('card--error');
            card.classList.remove('card--success');

            setTimeout(function() {
                window ['Card' + (index + 1)] = new Card(card);
            }, 300);

        });

        return this;
    }

    // Функция, которая завершает игру
    end(option) {

        // Останавливаем и удаляем таймер
        clearInterval(this.timer.function);
        this.timer.function = '';
        this.timer.isActive = false;

        let body = document.querySelector('body'),
            modalWinData = document.querySelectorAll('.modal [data-status="win"]'),
            modalLoseData = document.querySelectorAll('.modal [data-status="lose"]');

        // Отображаем модальное окно
        body.classList.add('opened-modal');

        // Выбираем нужные заголовок и текст в кнопке
        if (option === 'win') {
            modalWinData.forEach(function(element) {
                element.removeAttribute('hidden');
            });
            modalLoseData.forEach(function(element) {
                element.setAttribute('hidden', true);
            });
        }
        else {
            modalWinData.forEach(function(element) {
                element.setAttribute('hidden', true);
            });
            modalLoseData.forEach(function(element) {
                element.removeAttribute('hidden');
            });
        }

        return this;
    }

    // Вспомогательная функция для генерации объекта с emoji
    // Берем обычный массив с emoji и дублируем все emoji внутри
    // Так как на каждую emoji должно быть создано по две карточки
    emojiExpand() {
        if (this.emojiExtended) {
            delete this.emojiExtended;
        }

        let _this = this;
        this.emojiExtended = Array.from(this.emoji);
        this.emoji.forEach(function(item) {
            _this.emojiExtended.push(item);
        });
        return this;
    }

    // Вспомогательная функция, которая закрываем все ошибочные карточки
    closeAllErrorCards() {
        // Находим все ошибочные карточки
        for(let i = 1; i <= Memoji.cards.total; i++) {
            let card = window ['Card' + i];
            if (card.state === 'error') {
                card.close();
            }
        }
    }
}

// Главный класс карточки
class Card {
    constructor(element) {
        this.element = element;
        this.emoji = this.getRandomEmoji();
        this._state = 'default';
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
        return this._state;
    }

    // Функция рандомного выбора emoji для карточки
    getRandomEmoji() {

        // Генерируем рандомное число от 0 до (количество карточек)
        let randomIndex = Math.floor(Math.random() * (Memoji.emojiExtended.length));

        // Задаем emoji карточке
        let emoji = Memoji.emojiExtended[randomIndex];
        this.element.querySelector('.card__emoji').dataset.emoji = emoji;

        // Убираем emoji из списка
        Memoji.emojiExtended.splice(randomIndex, 1);

        return emoji;
    }

    // Открытие карточки
    open() {

        // Если игра ещё не начиналась, то начинаем
        if (!Memoji.timer.isActive) {
            Memoji.start();
        }

        // Закрываем все карточки с ошибками
        Memoji.closeAllErrorCards();

        this.state = 'opened';
        this.element.classList.add('card--opened');

        Memoji.cards.opened++;

        // Если это вторая открытая карточка, то сравниваем открытые
        if (Memoji.cards.opened > 1) {
            this.compare();
        }

        return this;
    }

    // Закрытие карточки
    close() {
        this.state = 'default';
        this.element.classList.remove('card--opened');

        if (!this.element.classList.contains('card--error')) {
            Memoji.cards.opened--;
        }
        else {
            this.element.classList.remove('card--error');
        }

        return this;
    }

    // Установка у карточки статуса успешной
    setSuccess() {
        this.element.classList.add('card--success');
        this.state = 'success';

        Memoji.cards.opened--;
        Memoji.cards.success++;

        // Если все карточки успешны, то завершаем игру
        if (Memoji.cards.success === Memoji.cards.total) {
            Memoji.end('win');
        }

        return this;
    }

    // Установка у карточки статуса ошибочной
    setError() {
        this.element.classList.add('card--error');
        this.state = 'error';

        Memoji.cards.opened--;

        return this;
    }

    // Функция сравнения открытых карточек
    compare() {
        let emoji = [];

        // Собираем открытые карточки
        for(let i = 1; i <= Memoji.cards.total; i++) {
            let card = window ['Card' + i];
            if (card.state === 'opened') {
                emoji.push(card);
            }
        }

        // Если карточки совпадают, то устанавливаем статусы успешных карточек
        if (emoji[0].emoji === emoji[1].emoji) {
            emoji[0].setSuccess();
            emoji[1].setSuccess();
        }
        // Иначе устанавливаем статусы ошибочных карточек
        else {
            emoji[0].setError();
            emoji[1].setError();
        }
    }

}

// Вспомогательная функция анимации заголовков
function animateTitle() {
    document.querySelectorAll('.modal__title span').forEach(function(span) {
        // Разделяем заголовки по буквам
        let letters = span.textContent.split(''),
            delay = 0;

        span.innerHTML = '';

        // Для каждой буквы задаем задержку на анимацию (эффект лесенки)
        for(let i = 0; i < letters.length; i++) {
            let el = document.createElement('span');

            el.textContent = letters[i];
            span.appendChild(el);

            delay+=.12;

            el.style.animationDelay = delay + 's';
        }

    });
}

// Создаем игру и карточки по загрузке страницы
document.addEventListener("DOMContentLoaded", function() {

    let cards = document.querySelector('.cards'),
        resetButton = document.querySelector('.modal__button');

    // Создаем игру
    window.Memoji = new Game(cards, cards.children.length);

    document.querySelectorAll('.card').forEach(function(card, index) {
        // Для каждого элемента в DOM создаем свою карточку
        window ['Card' + (index + 1)] = new Card(card);
    });

    // Клик по кнопке "Play/Try again"
    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.Memoji.restart();
    });

    // Анимируем заголовки в модальном окне
    animateTitle();

});