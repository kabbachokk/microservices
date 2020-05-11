<h2>Как запустить</h2>
<p>Запускать из <b>WSL или Linux!</b></p>

<p>Создать следующую структуру каталогов:</p>

```
└───dockerfiles
│   └───orientdb
│       └───config
|       └───databases
```

<p>Запустить контейнеры с помощью docker-compose</p>

```shell
docker-compose up -d
```

<h2>Что делаем</h2>
<p>E-commerce приложение разбитое на множество микросервисов с помощью graphql-federation.</p>

`Здесь должна быть схема сервисов`

<p>Сейчас каждый микросервис запускается в docker-контейнере с помощью docker-compose.</p>
<p>Как только все микросервисы достигнут версии <b>>1.0.0</b>  планируется переход на архитектуру cloud-native.</p>

<h2>Таблица сервисов</h2>
<table>
<thead>
<tr>
<th style="text-align:left"> Сервис</th>
<th style="text-align:left"> Версия</th>
<th style="text-align:left"> Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>Comments</td>
<td>0.0.0</td>
<td>Комментарии</td>
</tr>
<tr>
<td>Reviews</td>
<td>0.0.0</td>
<td>Обзоры</td>
</tr>
<tr>
<td>Catalog</td>
<td>0.0.0</td>
<td>Каталог</td>
</tr>
<tr>
<td>Shops</td>
<td>0.0.0</td>
<td>Магазины</td>
</tr>
<tr>
<td>Storages</td>
<td>0.0.0</td>
<td>Склады</td>
</tr>
<tr>
<td>Vendors</td>
<td>0.0.0</td>
<td>Поставщики</td>
</tr>
<tr>
<td>Cart</td>
<td>0.0.0</td>
<td>Корзина</td>
</tr>
<tr>
<td>Recommendations</td>
<td>0.0.0</td>
<td>Рекомендации</td>
</tr>
<tr>
<td>Ads</td>
<td>0.0.0</td>
<td>Реклама</td>
</tr>
<tr>
<td>Orders</td>
<td>0.0.0</td>
<td>Заказы</td>
</tr>
<tr>
<td>Notifications</td>
<td>0.0.0</td>
<td>Уведомления</td>
</tr>
<tr>
<td>Shipment</td>
<td>0.0.0</td>
<td>Доставка</td>
</tr>
<tr>
<td>Payment</td>
<td>0.0.0</td>
<td>Оплата</td>
</tr>
<tr>
<td>Webapp</td>
<td>0.0.0</td>
<td>Веб-приложение</td>
</tr>
</tbody>
</table>

<h2>Управление версиями</h2>
<p>Каждый сервис <a href="https://semver.org/">семантически версионируется</a> отдельно соответственно внесенным изменениям.</p>

<h2>Листы задач</h2>

<h3>Общие задачи</h3>
<ul>
    <li>[ ] Вставить схему сервисов</li>
    <li>[ ] Добавить базовые определения для всех сервисов</li>
    <li>[ ] Настроить GitHub Actions</li>
</ul>
<hr/>