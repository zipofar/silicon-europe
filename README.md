[![Build Status](https://travis-ci.org/zipofar/silicon-europe.svg?branch=master)](https://travis-ci.org/zipofar/silicon-europe)

[Demo](https://morning-atoll-29670.herokuapp.com/)

#### Так как проект находится на Heroku, могут быть задержки при открытии

# Тестовое задание для компании Силикон Еуроп

## Задание

Необходимо реализовать визард из четырех шагов.
### Шаг 1:
Таблица с записями (рисунок step1). Данные для таблицы должны загружаться из файла
legalentity.json

Пользователь может выбрать одну из записей, как показано на рисунке step1-1
Если не выбрано ни одной записи, пользователь не может перейти на следующий шаг.
![step1-1](https://github.com/zipofar/silicon-europe/raw/master/resources/step1-1.png)

### Шаг 2:
Таблица с записями (рисунок step2). Данные для таблицы должны загружаться из файла
pharmacy.json при этом записи должны фильтроваться, и отображаться только те записи, у
которых ключ legalEntityID соответствует ключу, выбранному на первом шаге.
Пользователь может выбрать несколько записей, как показано на рисунке step2-2
Если не выбрано ни одной записи, пользователь не может перейти на следующий шаг.
![step2-2](https://github.com/zipofar/silicon-europe/raw/master/resources/step2-2.png)

### Шаг 3:
Форма для ввода данных (рисунок step3)
Значения для поля Contract Type можно захардкодить (step3-1)
Поля Contract Date, Contract Start Date и Contract End Date - должны поддерживать виджет
календаря для выбора даты (step3-2), при этом вручную ввести дату нельзя. Должно
соблюдаться условие, что дата Contract End Date всегда больше или равна чем Contract Start
Date. При выборе даты Contract Start Date дата в Contract End Date должна обновляться, если
она была меньше чем значение в Contract Start Date, при этом недопустимые даты в
календаре должны становиться неактивными (step3-3).
![step3-1](https://github.com/zipofar/silicon-europe/raw/master/resources/step3-1.png)

### Шаг 4:
На последнем шаге должны выводиться данные, которые были выбраны/введены на
предыдущих шагах. Формат вывода данных - свободный.
На каждом из шагов должна быть возможность вернуться к предыдущему шагу и изменить
введенные ранее данные.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `make start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `make starts`

Runs the express server for fetch data from API.<br>
Server start on [http://localhost:9000](http://localhost:9000). 

Get Legal Entities by route [http://localhost:9000/legal_entities](http://localhost:9000/legal_entities)<br>
Get Pharmacies by route [http://localhost:9000//legal_entities/:id/pharmacies](http://localhost:9000/legal_entities/:id/pharmacies)

