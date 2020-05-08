//Переменные
let startBtn = document.getElementById("start");
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');
let expensesItem = document.querySelectorAll('.expenses-item');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let allBtn = document.getElementsByTagName('button');
let expensesItemBtn = allBtn[0];
let optionalExpensesBtn = allBtn[1];
let countBudgetBtn = allBtn[2];

let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', () => {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budtet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let q1 = expensesItem[i].value;
        let q2 = expensesItem[++i].value;

        if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
            appData.expenses[q1] = q2;
            sum += +q2;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', () => {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', () => {
    if (appData.budtet != undefined) {
        (appData.moneyPerDay = (appData.budtet - +expensesValue.textContent) / 30);
        dayBudgetValue.textContent = appData.moneyPerDay.toFixed();

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальний уровень достатка';
        } else if (appData.moneyPerDay > 100) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = "Error";
        }
    } else {
        dayBudgetValue.textContent = 'Error';
    }
});

chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value;
    if (isNaN(items) || items != '') {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    }
});

savings.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budtet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};