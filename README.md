[![Build Status](https://travis-ci.org/zipofar/silicon-europe.svg?branch=master)](https://travis-ci.org/zipofar/silicon-europe)

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

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
