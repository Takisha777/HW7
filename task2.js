// 2.   Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент
//      с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив,
//      в котором делается поиск. Функция должна возвращать true или false.

function inArray(text, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (text === arr[i]) {
            return true;
        }
    }
    return false;
}

document.writeln(inArray('hello', ['svnj', 'hello', 'cvpoq']));