
## Dapp example
---

### Описание
Данное приложение разработано для работы со смарт-контрактом сети Ethereum. Основная функция - хранение информации о пользователях (имя, возраст, город). Владельцы могут редактировать свои данные, просматривать данные других участников сети.

### Установка и запуск
1. Скачайте и установите Node.JS 9.5.0 - https://nodejs.org/en/download/current/
2. Склонируйте или скачайте репозиторий `git clone https://github.com/Stayer/dapp-example`
3. Откройте терминал (консоль) в папке с репозиторием
4. В консоле напишите `npm install http-server -g`
5. В консоле напишите `http-server --cors .`
6. Зайдите на http://localhost:8080/

### Файлы
- index.html - клиентская часть
- js/dapp.js - приложение для работы со смарт-контрактом
- js/web3.min.js - библиотека для работы с сетью Ethereum
- dapp.sol - smart-контракт
