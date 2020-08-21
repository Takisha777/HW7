// 1. Создать 2 объекта с различными полями.
//     Написать код, который переберёт оба объекта и сконкатениурет все поля-массивы.
//     Посчитать сумму чисельных элементов в массивах.

const userObj = {
    name: 'John',
    age: 7,
    surname: 'Connor',
    man: true,
    greet: greetFunc()
}
const userObj2 = {
    id: 1,
    name: 'Jany',
    age: 10,
    man: false,
    greet: greetFunc()
}
function greetFunc() {
    return arguments;
}
const userObj3 = {...userObj, ...userObj2};
console.log(userObj3);