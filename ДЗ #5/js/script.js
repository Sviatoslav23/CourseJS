let item = document.querySelectorAll('.menu-item');
let wrapperItem = document.querySelector('.menu');
let mainWrapper = document.querySelectorAll('.column');
let title = document.getElementById('title');
let adv = document.querySelector('.adv');
let answ = document.querySelector('#prompt');
console.log(mainWrapper);


title.textContent = "Мы продаем только подлинную технику Apple";

item[1].textContent = "Второй пункт";
item[2].textContent = "Третий пункт";

let newItem = document.createElement('li');
newItem.classList.add("menu-item");
newItem.textContent = "Пятый пункт";
wrapperItem.appendChild(newItem);

document.body.style.background = 'url(../img/apple_true.jpg)';

mainWrapper[1].removeChild(adv);

let question = prompt("Ваше отношение к технике apple?");
answ.textContent = question;