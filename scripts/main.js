"use strict"

// #### Task 1 💻

// Создайте переменные и присвойте им значения:

// ```javascript
//     'true'
//     false
//     17
//     undefined
//     null
// ```
// > Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

let tr = 'true';
let fl = false;
let nmb = 17;
let und = undefined;
let nl = null;


console.info (typeof(tr));
console.info (typeof(fl));
console.info (typeof(nmb));
console.info (typeof(und));
console.info (typeof(nl));

// #### Task 2 💻

// Даны две переменные:

// ```javascript
//     let height = 15
//     let width = 20
// ```

// > С помощью условий выведите в консоль разработчика наибольшее число.
    let height = 15;
    let width = 20; 
  
   if (height > width) {
    console.log (height)
   }
   else if (width > height) {
    console. log (width)
   };

//    #### Task 3 💻

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// > Для вычисления кратности обратите внимание на оператор %



for ( let a = 1; a < 21; a++) {
    if (a % 3===0) {
  console.log(a);
}};



// #### Task 4 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// ```javascript
//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
// ```

// > Ответ поместите в переменную **shouldGoToWork**

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple|| orange);
console.log (shouldGoToWork);


// #### Task 5 💻

// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

let number = + prompt (`Укажите любое число:`);
if (number % 5 === 0) {
    console.log ('Fiz');
}
else if (number % 3 === 0) {
    console.log ('Buz');
}
else if (number % 3 === 0 && number % 5 === 0) {
    console. log ('FizBuz');
}
else { console.log ('falses');
}





// #### Task 6 💻

// Написать программу, которая выполняет следующие операции:

// - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// - Если меньше, то выводит сообщение - `Пей колу`. 
// - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.


let conditionAdult = prompt ( `Сколько тебе лет?`);

if  (conditionAdult > 18) {
    alert (`Попей пивка`);
}

else if (conditionAdult < 18) {
    alert (`Пей колу`);
}
else if (conditionAdult >= 16 && conditionAdult < 19 ) {
    alert (`Пей колу.Можешь выкурить сигаретку, только маме не говори.` );
}




// #### Task 7 💻

// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. 
//После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, 
//выведите сообщение в консоль чтобы он попробовал еще раз.

// + `юг` на юг пойдешь счастье найдешь
// + `север` на север пойдешь много денег найдешь
// + `запад` на запад пойдешь верного друга найдешь
// + `восток` на восток пойдешь разработчиком станешь

// > Используйте конструкцию switch

let sideOfWorld = prompt (` В какую сторону света Вы бы хотели отправится: юг, север, запад, восток?:`);
switch (sideOfWorld) {
    case 'юг':
        alert ( `на юг пойдешь счастье найдешь`);
        break;
    case 'север':
        alert (`на север пойдешь много денег найдешь`);
        break;
    case 'запад':
        alert (`на запад пойдешь верного друга найдешь`);
        break;
    case ('восток'):
        alert (`на восток пойдешь разработчиком станешь`);
        break;
    default:
        alert (`Попробуйте еще раз`);


};



// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через **alert**

// > Привет, Полина Набережная!

// #### Task 2 👨‍🏫 

// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)


let conditionOne = +prompt (` Введите любое чиcло:`);
let conditionTwo = +prompt (` Отнимите число 10:`);
let conditionTree = +prompt (` А теперь прибавьте  число 5:`);
let conditionFour = +prompt (` А теперь умножьте на 20:`);
let conditionFive = +prompt (` И разделите на 2:`);
let result = ((((conditionOne - conditionTwo) + conditionTree) * conditionFour) /conditionFive );
alert(`((((${conditionOne} - ${conditionTwo}) + ${conditionTree}) * ${conditionFour}) / ${conditionFive} = ${result})`);

// считает неверное



// #### Task 3 👨‍🏫

// Написать программу, которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

// > Не забудьте вопспользоваться циклами

for (let i = 0; i < 6; i++) {
    let line = ' '
    for(let j = 0; j < i; j++) {
      line += '#'
    }
    console.log(`${line}#`)
  }
 

for (let i=1, str =''; i<=6; i++) {
    str += '#';
    console.log(str);
}
