(function (root) {

    let
        GAME = {},

        // Переменные для пользвоателя
        userForm = document.getElementsByClassName('js-user-form')[0],
        userLetter = document.getElementsByClassName('js-user-letter')[0],
        userField = document.getElementsByClassName('js-user-field')[0],
        userPrevious = document.getElementsByClassName('js-user-previous')[0],

        // Переменные для бота
        botCity = document.getElementsByClassName('js-bot-city')[0],
        botPrevious = document.getElementsByClassName('js-bot-previous')[0],

        // Переменные для статистики
        statsTurn = document.getElementsByClassName('js-stats-turn')[0],
        statsUser = document.getElementsByClassName('js-stats-user')[0],
        statsBot = document.getElementsByClassName('js-stats-bot')[0],
        statsArea = document.getElementById('stats'),
        statsMessageWin = document.getElementsByClassName('js-stats-win')[0],
        statsMessageLose = document.getElementsByClassName('js-stats-lose')[0],

        // Прочие переменные
        beginTexts = document.getElementsByClassName('js-begin-text'),
        inProgressTexts = document.getElementsByClassName('js-in-process-text'),
        endGameLink = document.getElementsByClassName('js-end-game-link')[0],
        map_block = document.getElementsByClassName('js-map')[0],
        messages = document.getElementsByClassName('js-messages')[0];


    GAME.USER = {};
    GAME.TURN = {};
    GAME.TURN.count = 1;
    GAME.LIST = [];
    GAME.LOG = {};
    GAME.LIST.__proto__.user = [];
    GAME.LIST.__proto__.bot = [];
    GAME.TURN.whose = 'user';
    GAME.isEnded = false;

    /**
     * Фукнция возвращает последнюю букву в названии города
     *
     * @param {string} word название города
     */
    function getLastLetter(word) {

        if (!word) {
            return false;
        }

        let a = -1,
            b = 0,
            last_letter = word.toLowerCase().slice(a);

        // Выполняем цикл до тех пор, пока не избавимся от запрещенных букв
        while (/[ьъый]/.test(last_letter)) {
            a--;
            b--;
            last_letter = word.toLowerCase().slice(a, b);
        }

        return last_letter;
    }

    /**
     * Функция выполняет действие "Новый ход"
     *
     */
    function makeMove() {

        hideMessages();

        let city = '';

        // Если ход пользователя, берем город из главного поля пользователя
        if (GAME.TURN.whose === 'user') {
            city = userField.value;

            if (!city) {
                showMessage('empty');
            }

        }
        // Иначе берем город из словарного запаса бота
        else {
            city = GAME.BOT.vocabulary.find(getLastLetter(GAME.LIST[GAME.LIST.length - 1]));
            if (!city) {
                endGame('user');
            }
        }

        if (city) {
            findOnMap(city);
        }

    }

    /**
     * Функция возвращает, есть ли город в списке уже названных
     *
     * @param {string} city название города
     * @return {boolean} answer (true = город в списке названных)
     */
    function isInList(city) {

        if (!city) {
            return false;
        }

        let answer = false;

        for (let i = 0; i < GAME.LIST.length; i++) {
            if (GAME.LIST[i] === city) {
                answer = true;
                break;
            }
        }

        return answer;
    }

    /**
     * Функция добавляет город в список названных
     *
     * @param {string} city название города
     */
    function addInList(city) {

        if (!city) {
            return false;
        }

        GAME.LIST.push(city);

        if (GAME.TURN.whose === 'user') {
            GAME.LIST.user.push(city);
        }
        else {
            GAME.LIST.bot.push(city);
        }

        // Вырезаем город из словарного запаса бота
        let index = GAME.BOT.vocabulary.indexOf(city);
        if (index !== -1) {
            GAME.BOT.vocabulary.splice(index, 1);
        }

        console.log('Добавляем город ' + city + ' в список названных городов.');
    }

    /**
     * Функция возвращает название города
     *
     * @param {object} city объект города
     */
    function getName(city) {
        if (!city) {
            return false;
        }
        return String(city.properties.get('name'));
    }

    /**
     * Функция выводит сообщение
     *
     * @param {string} type тип сообщения (not_found, wrong_letter, already_named, empty, win, lose)
     * @param {string} data дополнительный текст для сообщения
     */
    function showMessage(type, data) {
        for (let i = 0; i < messages.children.length; i++) {
            if (messages.children[i].getAttribute('data-type') === type) {
                let message = messages.children[i];
                if (data) {
                    for(let j = 0; j < message.children.length; j++) {
                        if (message.children[j].getAttribute('data-message-data')) {
                            message.children[j].innerHTML = data;
                        }
                    }
                }
                messages.children[i].removeAttribute('hidden');
                break;
            }
        }
    }

    /**
     * Функция скрывает все сообщения
     *
     */
    function hideMessages() {
        for (let i = 0; i < messages.children.length; i++) {
            messages.children[i].setAttribute('hidden', '');
        }
    }

    /**
     * Функция ищет город на карте, после чего выполняет главные игровые функции
     *
     * @param {object} city объект города
     */
    function findOnMap(city) {

        if (!city) {
            return false;
        }

        userField.setAttribute('disabled', '');

        let geocoder = ymaps.geocode(city, {kind: 'locality'});

        geocoder.then(
            function (res) {
                userField.removeAttribute('disabled');
                let city_object = null;

                // Проверяем kind у найденного объекта
                res.geoObjects.each(function(obj) {
                    let kind = obj.properties.get('metaDataProperty').GeocoderMetaData.kind;
                    // Если это город, то берем его
                    if (kind === 'locality' || kind === 'province') {
                        city_object = obj;
                        return false;
                    }
                });

                if (city_object) {
                    // Если город не находится в списке уже названных
                    if (!isInList(getName(city_object))) {

                        // Проверяем, начинается ли город на нужную букву
                        if (GAME.LIST.length && GAME.TURN.whose === 'user') {
                            if (getName(city_object).toLowerCase().slice(0, 1) !== getLastLetter(GAME.LIST[GAME.LIST.length - 1])) {
                                showMessage('wrong_letter', getLastLetter(GAME.LIST[GAME.LIST.length - 1]));
                                userField.value = '';
                                userField.focus();
                                return false;
                            }
                        }

                        // Если первый ход
                        // Разблокируем карту, делаем несколько действий с текстами в главных полях
                        if (GAME.TURN.count === 1) {
                            map_block.classList.remove('map--empty');

                            for (let i = 0; i < beginTexts.length; i++) {
                                beginTexts[i].setAttribute('hidden', '');
                            }
                            for (let i = 0; i < inProgressTexts.length; i++) {
                                inProgressTexts[i].removeAttribute('hidden');
                            }
                        }

                        createMapPoint(city_object);
                        addInList(getName(city_object));

                        // Работаем с заполнением "предыдущих" городов
                        if (GAME.TURN.whose === 'user') {
                            fillPrevious(getName(city_object));
                            userField.value = '';
                        }
                        else {
                            (GAME.TURN.count > 2)
                                ? fillPrevious(GAME.LIST[GAME.LIST.length - 3])
                                : '';
                            botCity.innerHTML = getName(city_object);
                            for (let i = 0; i < userField.parentElement.children.length; i++) {
                                if (userField.parentElement.children[i].tagName.toLowerCase() === 'label') {
                                    userField.parentElement.children[i].removeAttribute('hidden');
                                    break;
                                }
                            }
                            userLetter.innerHTML = getLastLetter(getName(city_object));
                        }

                        changeTurn();

                        // Вызываем ход бота
                        if (GAME.TURN.whose === 'bot') {
                            makeMove();
                        }

                    }
                    // Если город находится в списке уже названных
                    else {
                        showMessage('already_named', getName(city_object));
                        userField.value = '';
                    }
                }
                else {
                    showMessage('not_found', userField.value);
                    userField.value = '';
                }

                userField.focus();

            },
            function (error) {
                userField.removeAttribute('disabled');
                console.log('Ошибка во время поиска объекта на карте.', error);
                return false;
            }
        );

    }

    /**
     * Функция добавляет метку на карте
     *
     * @param {object} city объект города
     */
    function createMapPoint(city) {

        if (!city) {
            return false;
        }

        GAME.MAP.geoObjects.add(city);
    }

    /**
     * Функция записывает название города в предыдущий названный
     *
     * @param {string} city объект города
     */
    function fillPrevious(city) {

        if (!city) {
            return false;
        }

        let status = 'success';

        if (GAME.TURN.whose === 'user') {
            userPrevious.innerHTML = city;
        }
        else {
            botPrevious.innerHTML = city;
        }

        return status;
    }

    /**
     * Функция сменяет ход
     *
     */
    function changeTurn() {
        if (GAME.TURN.whose === 'user') {
            GAME.TURN.whose = 'bot';
        }
        else {
            GAME.TURN.whose = 'user';
        }
        GAME.TURN.count++;
        checkStats();
    }

    /**
     * Функция завершает игру
     *
     * @param {string} winner победитель (user/bot)
     */
    function endGame(winner) {

        if (GAME.isEnded) {
            return false;
        }

        hideMessages();

        if (winner === 'user') {
            showMessage('win');
            statsMessageWin.removeAttribute('hidden');
        }
        else {
            showMessage('lose');
            statsMessageLose.removeAttribute('hidden');
        }

        userField.setAttribute('disabled', '');

        // Открытие модального окна (remodal работает только через jQuery-обращение)
        $('[data-remodal-id="statistics"]').remodal().open();

        GAME.isEnded = true;
    }
    GAME.end = endGame;

    /**
     * Функция обновляет статистику
     *
     */
    function checkStats() {
        statsTurn.innerHTML = GAME.TURN.count;
        statsUser.innerHTML = GAME.LIST.user.length;
        statsBot.innerHTML = GAME.LIST.bot.length;

        let author = '';

        (GAME.TURN.whose === 'user')
            ? author = 'Противник'
            : author = 'Вы';

        if (GAME.LIST.length) {
            statsArea.innerHTML = (GAME.TURN.count - 1) + '. ' + GAME.LIST[GAME.LIST.length - 1] + ' (' + author + ')\n' + statsArea.innerHTML
        }

    }

    /**
     * Обработчики событий
     *
     */
    function eventListeners() {

        userField.addEventListener('input', function() {
            let label = '';
            for (let i = 0; i < userField.parentElement.children.length; i++) {
                if (userField.parentElement.children[i].tagName.toLowerCase() === 'label') {
                    label = userField.parentElement.children[i];
                    break;
                }
            }

            if (this.value.length) {
                label.setAttribute('hidden', '');
            }
            else {
                label.removeAttribute('hidden');
            }
        });

        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!GAME.isEnded) {
                makeMove();
            }
        });

        endGameLink.addEventListener('click', function(e) {
            e.preventDefault();
            endGame('bot');
        });

    }

    checkStats();
    eventListeners();

    root.GAME = GAME;

})(this);