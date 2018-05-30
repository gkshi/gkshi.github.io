(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    // Переменная для подсчета количества итераций
    root.SHRI_ISLANDS.ITERATIONS = 0;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов, представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {

        if (!map) {
            LOG.add('Карта не получена');
            return false;
        }
        else {
            LOG.add('Получили карту\nНачинаем собирать всю сушу на карте');
        }

        let
            total = 0,

            land = {},
            islands = {};

        // Цикл для сбора всей суши
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 1) {
                    let as = String(i) + String(j);
                    land[as] = 1;
                }
            }
        }

        if (!Object.keys(land).length) {
            LOG.add('Нет суши на карте');
            return total;
        }

        LOG.add('Собрали сушу (элементов: ' + Object.keys(land).length + ')');
        console.log('Суша:', land);
        console.log('');
        LOG.add('Запускаем цикл по элементам суши');

        // Цикл по всей суше для сборки островов
        let num = 0;

        for (key in land) {

            root.SHRI_ISLANDS.ITERATIONS++;

            console.log('Элемент #' + num, ' координаты:', key);

            let again = true,
                repeat = false,
                island = {},
                a = Number(key.slice(0, 1)),
                b = Number(key.slice(1));

            while (again) {

                root.SHRI_ISLANDS.ITERATIONS++;

                island[a+String(b)] = 1;
                delete land[a+String(b)];

                // top
                if (land[a-1+String(b)]) {
                    console.log('found top', a-1+String(b));
                    island[a-1+String(b)] = 1;
                    console.log('island', island);
                    a--;
                    repeat = true;
                    continue;
                }

                // right
                if (land[a+String(b+1)]) {
                    console.log('found right');
                    island[a+String(b+1)] = 1;
                    console.log('island', island);
                    b++;
                    repeat = true;
                    continue;
                }

                // down
                if (land[a+1+String(b)]) {
                    console.log('found down', a+1+String(b));
                    island[String(a+1)+b] = 1;
                    console.log('island', island);
                    a++;
                    repeat = true;
                    continue;
                }

                // left
                if (land[a+String(b-1)]) {
                    console.log('found left');
                    island[a+String(b-1)] = 1;
                    console.log('island', island);
                    b--;
                    repeat = true;
                    continue;
                }

                if (repeat) {
                    a = Number(key.slice(0, 1));
                    b = Number(key.slice(1));
                    repeat = false;
                    continue;
                }

                let
                    transfer = false,
                    to = 0;

                // Последняя проверка перед созданием нового острова
                // Ищем соседей текущей ячейки в уже созданных островах
                for (key in island) {

                    root.SHRI_ISLANDS.ITERATIONS++;

                    let c = Number(key.slice(0, 1)),
                        d = Number(key.slice(1));

                    for (akey in islands) {

                        root.SHRI_ISLANDS.ITERATIONS++;

                        if (islands[akey][c-1+String(d)] ||
                            islands[akey][c+String(d+1)] ||
                            islands[akey][c+1+String(d)] ||
                            islands[akey][c+String(d-1)]) {
                            console.log('Соседняя ячейка найдена в уже созданном острове');
                            transfer = true;
                            to = akey;
                        }
                    }
                }

                if (transfer) {
                    for (key in island) {
                        islands[to][key] = 1;
                        island = {};
                    }
                }

                console.log('Больше рядом ничего не найдено');
                console.log('island', island);

                again = false;
            }

            if (Object.keys(island).length) {
                LOG.add('Собрали остров #' + Number(num + 1) + ' (элементов: ' + Object.keys(island).length + ')');
                islands[num] = island;
            }

            console.log('');

            num++;

        }

        total = Object.keys(islands).length;

        LOG.add('\nОбход завершен.\nСобрано островов: ' + total);
        console.log('islands', total, islands);
        LOG.add('Количество итераций: ' + root.SHRI_ISLANDS.ITERATIONS);

        return total;

    }

    root.SHRI_ISLANDS.solution = solution;
})(this);