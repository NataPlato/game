// const hours = 19;

// if (hours <= 12) {
//   console.log("Доброе утро");
// } else if (hours <= 18) {
//   console.log("Добрый день");
// } else if (hours <= 22) {
//   console.log("Добрый вечер,я диспечер");
// }

// let zabor = "#";

// for (let i = 1; i <= 7; i++) {
//     console.log(zabor);
//     zabor += "#";
// }

// let zabor = "#";

// while (zabor.length <= 7) {
//     console.log(zabor);
//     zabor += "#";
// }
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// // }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i);
//   } else if (i % 5 !=0) {
//     console.log("Fizz");
//   } else if ( i % 3 !=0) {
//     console.log("Buzz");
//   } else {
//     console.log("FizzBuzz");

//   }
// }
// var summ = function(n) {
//    var result = 0;
//    for (i = 1; i <= n; i++) {
//        result += i;
//    }
// return result;
// }

// console.log(summ(2));

// function summ(n) {
//   if (n == 0) {
//     return n;
//   }
//   return n + summ(n - 1);
// }

// console.log(summ(3));

// Короткий вариант:
// function s(n){return (n==0)?0:n+s(n-1)}
// console.log(s(3));

// var user = "Alex";
// user = 56;
// let oldUser = 45;
// oldUser = 25;
// const age = 40;

// var a,
//   b = 45;
// var a,
//   b = (a = 25);

// var a;

// name = "Serg";
// var name;
// console.log(name);

// console.log(user);
// console.log(oldUser);
// console.log(age);

// foo();
// var foo;

// function foo(){
//     console.log(1);
// }

// function glas(char, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (char == array[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// function funtic(a, b = "аоуиеяюэыё") {
//   let result = "";
//   for (let i = 0; i < a.length; i++) {
//     if (glas(a[i], b)) {
//       result += (a[i]);
//     }
//   }
//   return result;
// }
// console.log(funtic("В лесу родилась дурочка"));
