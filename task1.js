// 1. Создать 2 объекта с различными полями.
//     Написать код, который переберёт оба объекта и сконкатениурет все поля-массивы.
//     Посчитать сумму чисельных элементов в массивах.
debugger;
const userObj = {
    name: 'John',
    age: 7,
    surname: 'Connor',
    man: true,
    greet: greetFunc(),
    arr: [1, 2, 3, 'jane', 4, 5]
};
const userObj2 = {
    id: 1,
    name: 'Jany',
    age: 10,
    man: false,
    greet: greetFunc(),
    arr: [6, 7, NaN, 8, 9, 1]
};
function greetFunc() {
    return arguments;
}
let tempNumber = 0;
let  userObj3 = [];

function myFunc(a) {
    debugger;
    for (let key in a){
        if (Array.isArray(a[key])){
            for (let l = 0; l < a[key].length; l++){
                userObj3.push(a[key][l]);
                console.log(typeof a[key][l]);
                if (typeof a[key][l] === 'number' &&  a[key][l] === 'NaN'){
                    tempNumber += a[key][l];
                }
            }
        }
    }
    return tempNumber;
}
function concObject (a, b){
    myFunc(a);
    myFunc(b);
    return tempNumber;
}
document.writeln(concObject(userObj, userObj2));
document.writeln(userObj3);