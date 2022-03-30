# block-opt
Проект небольшого сайта по продаже строительных материалов
Данные проект коммерческий, но при этом его можно отнести и к пет-проектам, потому что все решения начиная от дизайна заканчивая структурой и выбором технологий были моими. 

Изначальная цель - заменить старый сайт на тильде, который не устраивал из-за следующих проблем:
- отсутствие каталога и инструментов манипулирования этим каталогом (сортировки, фильтры)
- измение или добавление новых позиций было крайне неудобным
- сайт был достаточно тяжелым (одна длинная страница), что влияло на конверсию

Назначение сайта - получение контактов потенциальных покупателей

Трафик - только контекстная реклама (Яндекс Директ)

## Функционал:
- клиентская часть:
 - отдельные страницы
 - формы для заявок 
 - каталог продукции
 - фильтры и сортировка для каталога
 - для мобильной версии возможность сразу перейти к диалогу в ватсап
- админская часть:
 - авторизация (login: admin@admin.ru pass: admin123)
 - восстановление пароля
 - добавление новых позиций
 - добавление новых параметров для позиций (производители, категории, тип товара), которые в дальнейшем можно привязать к позиции
 - изменение позиций и их параметров
 - добавление и изменение изображений для позиций
 - удаление позиций и параметров

## Техническая чать:
- На фронте vue (nuxt) + vuetify + иконки из @mdi/js + scss + axios + firebase (модуль firestore database и authentication)

Для большей продуктивности иконки из vuetify пришлось удалить, так как они загружались сразу все в виде шрифта. Так же удалил стандартные цвета по той же причине, грузятся все, а используется от силы штук 5.

Firebase используется только в админской части сайта, для клиентской части данные подгружаются из снимков дб, которые создаются автоматически при измении бд через админку и хранятся на сервере.

Firebase authentication используется только для авторизации и восстановления пароля (через email). Регистрацию делать смысла не видел.


- На бэке express, body-parser для апишки, multer для загрузки изображений по апи, telebot для отправки заявок в телеграм
- Линтер: airbnb eslint


## Установка:
- git clone https://github.com/Sergwez/blockopt.git 

- создать проект в firestore:
1. В authentication создать метод авторизации Email/Password и добавить данные для авторизации (емейл и пароль)
2. В firestore database установить следующее правило:
```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```
- Создать бота и группу в телеграм, добавить бота в группу и дать права администратора

- Заполнить .env данными из firestore и телеграм

- Если планируется деплой в heroku, то создать аналогичные .env переменые: heroku config:set <name>=<value>

- npm install

- Очистить папку static/snapshots

- Перейти в админку и создать новые документы в дб: открыть меню и нажать кнопку "восстановить БД". В дальнейшем этот компонент можно удалить




## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
