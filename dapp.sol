// версия языка solidity - 0.4.18
pragma solidity ^0.4.18;

// наш контракт - dapp
contract dapp {

    // структура User. Удобная группировка инфрмации в одном типе переменной
    struct User {
        string name;
        uint age;
        string city;
    }

    // таблица пользователей users
    // ключ - хэш от адреса пользователя   
    // значение - структура пользователя 
    // внимание! Эта таблица имеет неограниченный размер, по умолчанию в ней есть все ключи
    mapping (bytes32 => User) users;
    
    // функция регистрации. входные параметры - имя, возраст, город
    function newProfile(string _name, uint _age, string _city) public {
        users[keccak256(msg.sender)] = User(_name, _age, _city);
    }
    
    // функция получения информации о профиле через адрес
    function getProfile(address key) public constant returns(string, uint, string) {

        // возвращает tuple (кортеж) вида (строка, число, строка)
        return (users[keccak256(key)].name, users[keccak256(key)].age, users[keccak256(key)].city);
    }
}