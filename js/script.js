let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
// start();

let appData = {
    budtet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// let i=0
// while(i<2) {
//     console.log(arr);
//     i++
// }

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Введите обязательную статью расходов в этом месяце");
        let a1 = prompt("Во сколько обойдется?");

        if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (a1)) != null && q1 != '' && a1 != '' && q1.length < 50) {
            console.log("Good");
            appData.expenses[q1] = a1;
        } else {
            i--;
        }
    }
}
// chooseExpenses();

function detectDayBudget() {
    (appData.moneyPerDay = appData.budtet / 30).toFixed();
    alert("Бюджет на 1 день:" + appData.moneyPerDay);
    // console.log(appData);
}
// detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальний уровень достатка');
    } else if (appData.moneyPerDay > 100) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log("Error");
    }
}
// detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

    }
}
// checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let q2 = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = q2;
    }
}
chooseOptExpenses();
// console.log(appData);