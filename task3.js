// 3.   Написать методы push, join, reverse самостоятельно. Их функциональность должна
//      соответствовать стандартным методам массивов.
//      list.myPush(); list.myJoin(); list.myReverse();

let arr = [1, 2 ,3 , 'red', NaN];
Array.prototype.myPush = function (userElement){
    arr[arr.length] = userElement;
    return arr.length;
};
Array.prototype.myJoin = function (userSym) {
    return arr.join(userSym);
};
Array.prototype.myReverse = function () {
    arr.reverse();
    return arr;
};

document.writeln(arr.myPush(23)+ '<br>');
document.writeln(arr.myJoin('+') + '<br>');
document.writeln(arr.myReverse());