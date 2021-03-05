var surname = prompt('Укажите вашу фамилию', 'Пупкин');
var name = prompt('Укажите ваше имя', 'Иван');
var patronymic = prompt('Укажите ваше отчество', 'Вениаминович');

var age = +prompt('Укажите ваш возраст в годах', '18');

var male = confirm('Ваш пол мужской?');

var retiree = confirm('Вы на пенсии?');

if (male > 0) {
    male = 'мужской'
} else {
    male = 'женский'
}

retiree > 0 ? retiree = 'да' : retiree = 'нет';

alert('ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + '\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + (age * 365) + '\nчерез 5 лет вам будет: ' + (age + 5) + '\nваш пол: ' + male + "\nвы на пенсии: " + retiree);


