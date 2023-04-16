//기본형 데이터
var a = 10;
var b = a;

//참조형 데이터
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };
console.log(obj1)
console.log(obj2)

//James
// undefined