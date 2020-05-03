
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budtet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// let i=0
// while(i<2) {
//     console.log(arr);
//     i++
// }

for(let i=0;i<2;i++) {  
    let q1 = prompt("Введите обязательную статью расходов в этом месяце");
    let a1 = prompt("Во сколько обойдется?");

    if((typeof(q1))=== 'string' && (typeof(q1)) !=null && (typeof(a1)) != null && q1 != '' && a1 !='' && q1.length < 50) {
        console.log("Good");
        appData.expenses[q1] = a1;
    }
    else {
        alert("try one more");
    }
}
appData.moneyPerDay = appData.budtet/30;

alert("Бюджет на 1 день:" + appData.moneyPerDay);
// console.log(appData);

if(appData.moneyPerDay < 100) {
    console.log('Минимальний уровень достатка');   
}else if(appData.moneyPerDay > 100){
    console.log('Средний уровень достатка'); 
}else if(appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка'); 
}else {
    console.log("Error");  
}
