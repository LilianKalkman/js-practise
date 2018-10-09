function a(){
  var name = 'lilian';
  console.log(this);
}

// function b(){
//   console.log('function b is called');
//   console.log(this);
// }
//
// console.log(this);

a();
console.log(a.code, a.name);


a.property = 'property';


console.log(a);
console.log(a.property);


// Closure

function createQuestion(customer){
  return function(sort){
    console.log('Hi ' + customer + ' be prepared for your ' + sort +' class');
  }
}

var docentQuestion = createQuestion('docent');
var leerlingQuestion = createQuestion('leerling');

docentQuestion('dans');
docentQuestion('muziek');

leerlingQuestion('dans');
leerlingQuestion('muziek');


// function passLimiter(limiter){
//   return function (item){
//     return item > limiter;
//   }.bind(this, limiter);
// }

// mapforEach(array, passLimiter(9))

function mapForEach(arr, fn) {

    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2;
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2;
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);





function eenfunctie(){
  console.log('dit is een function');
}

function Lilian(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

var kind = new Lilian('lilian', 'kalkman');

console.log(eenfunctie);
console.log(Lilian);
console.log(kind);

console.log(this);


// make a new method for every string

console.log(String);
// String is al een bestaande built-in function constructor

String.prototype.cutLastLetter = function(){
  var end = this.length - 1;
  var newString = this.slice(0, end);
  return newString;
}

console.log('lilian'.cutLastLetter());
console.log('carine'.cutLastLetter());
