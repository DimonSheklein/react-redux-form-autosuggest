Моя самая первая форма на реакт-редукс. Вообще первый мой самостоятельный проект на реакт-редукс, так-что не судите строго.

Из фишек - ручками написанный автосаджестер (подсказки) на поле Профессия, который срабатывает на строку длинной 3+ символа и поддерживает отлов нажатий на клавиши вверх, вниз, ентер, ескейп, клик мышкой и потерю фокуса.

Приложил немало усилий чтобы разделить компоненты на простые (без собственного состояния) и умные (контейнеры).

Все компоненты получают состояние из хранилища редукс либо непосредственно, либо через контейнеры.

Пока не рефакторил, можно некоторые компоненты переписать в сторону большей универсальности.

Как всегда не забываем выполнить `npm i` перед запуском.

Запускать в dev-режиме так: `npm start`

Остальную информаицю гуглим по ключу `create-react-app`

С флагами следующий нюанс: необходимо либо линкануть `./node_modules/react-flags/vendor/flags` в `./public/img/flags`, либо просто скопировать.

* Флаги пришлось скопировать, чтобы на git pages опубликовать.
* Пришлось пофиксить путь до папки с флагами в `node_modules/react-flags/lib/react-flags.js` в строке 130 `basePath: "img/flags",` для возможности публикации проекта не в корневом урле сервера

Для Linux систем можно воспользоваться командой `ln -s ./node_modules/react-flags/vendor/flags ./public/img/flags` (не актуально)
