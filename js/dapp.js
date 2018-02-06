// подключаем библиотеку web3.js
var Web3 = require('web3');

// подключаемся к ноде (клиенту сети Ethereum)
var web3 = new Web3(new Web3.providers.HttpProvider("http://5.8.180.24:8545")); 

// abi - это скелет контракта
// В Mist берётся в меню Contracts -> Выбираем контракт -> Справа кликаем на "Show interface"
var abi = [ { "constant": true, "inputs": [ { "name": "key", "type": "address" } ], "name": "getProfile", "outputs": [ { "name": "", "type": "string", "value": "" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_age", "type": "uint256" }, { "name": "_city", "type": "string" } ], "name": "newProfile", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]

// подключаем интерфейс контракта в наше приложение 
dapp = web3.eth.contract(abi)

// создаём экземпляр контракта с указанным адресом
contractInstance = dapp.at("0xf2CFF12798650f736567a2A34689DdBdBad262a4")

// адрес пользователя, от имени которого запускается контракт
// Он уже существует в базе, это основной аккаунт (№1)
var addr = "0x525Ee83356c3282d959F301CE8346C68c9C53202" 

// при нажатии на кнопку "Check" срабатывает данная функция (или событие)
$("#check").submit(function(event){

  // прерываем отправку форму (для того, чтобы страница не перезагружалась в браузере)
  event.preventDefault();

  // получаем информацию о пользователе через функцию getProfile() в контракте. 
  // Запрос идёт от пользователя с адресом addr
  let user = contractInstance.getProfile($('#inputAddr').val(), {from: addr, gas: 300000})

  // проверяем, есть ли информация о данном пользователе в блокчейне
  // Есть - выводим, нет - возвращаем ошибку
  if(user[0] != "" && user[1].toString != "0" && user[2] != "") {

    // проверка адреса клиента, отправляющего запрос. 
    // Если мы получаем информацию о своём профиле (адреса совпадают), то добавляем фразу (you)
    if($('#inputAddr').val().toUpperCase() == addr.toUpperCase()) {
      user[0] += " (you)"
    }

    // присваиваем значением элементов с id u-name, u-age, u-city (файл index.html) значения
    $("#u-name").text(user[0])
    $("#u-age").text(user[1].toString())
    $("#u-city").text(user[2])
  }
  // оповещаем, что информации о пользователе в системе нет
  else {
    alert("Can't find information about this user!")
  }
  
  // дополнительное прерывание при отправке формы, на случай, если строчка 25 не сработает
  return false;

});