// //  
// 1-scope metodi
//Scope qamrov degan manoni bildiradi.Scope-element(deklaration)korinadigan
// va boshqa kodga kirish mumkin bo`lgan hududni bildiradi.JSda 3xil scope mavjud
//1.Global scope
//2.Function/Local scope
//3.Block scope
// var a = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outer();

// 2-Hosting
//Hoisting - bu JSning (default xususiyatlaidan) biri bo`lib, unda o`garuvchilar va funksiyalar deklaratsiyasi avtomatik ravishda ularning qamrov qismining eng yuqorisiga ko`taradi.
// console.log(x);
// var x = 5;
// console.log(x);
// ushbu kodda var bilan berilgan yuqorida undefined pastda 5 ni qaytaradi 

// 3-TDZ (temporval dead zone)
// //Temporal Dead Zone - qisqartmasi TDZ.JSda let va const o`zgaruvchilarga murojat qilib bo`lmaydigan hudud yoki vaqt Temporal Dead zone  bo`ladi.
// //Bu intervalda murojat qilishga harakat qilinganda ReferenceError yuzaga keladi
// // console.log(y);
// // let y = 10;
// // console.log(y);
// bu kodda tepa ishlamaydi pastki qismi ishlaydi


// Masalalar

// // 1-masala

// let str = ["apple ", "banana", "pear"];
// function deleteelement(str) {
//   let res = str.filter(function (value) {
//     return value.length >= 5;
//   });

//  let res1= res.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return res1.join("");
// }
// console.log(deleteelement(str));

// // 2-masala

// function Kattatalabanitopish(oquvchilar) {
//   let res = oquvchilar.find(function (talaba) {
//     return talaba.yosh > 20;
//   });

// if(res){
//     let talaba1 = res.ism.toUpperCase()
//     return talaba1
// }

//    oquvchilar = [
//     { ism: "Rustam", yosh: 18 },
//     { ism: "Odil", yosh: 17 },
//     { ism: "Rustam", yosh: 20 },
//     { ism: "Rustam", yosh: 21 },
//   ];
//   return res
// }
// let natija=Kattatalabanitopish(oquvchilar);
// console.log(natija);
// function birinchiKattaTalaba(talabalar) {
//     // 20 yoshdan katta bo'lgan birinchi talabani topamiz
//     let kattaTalaba = talabalar.find(function(talaba) {
//       return talaba.yosh > 20;
//     });

//     // Agar bunday talaba topilsa, uning ismini katta harfga aylantiramiz
//     if (kattaTalaba) {
//       let kattaIsm = kattaTalaba.ism.toUpperCase();
//       return kattaIsm;
//     } else {
//       // Agar bunday talaba topilmasa, null yoki boshqa mos qiymat qaytaramiz
//       return null;
//     }
//   }

//   // Misol uchun
//   let talabalar = [
//     { ism: "Ali", yosh: 19 },
//     { ism: "Vali", yosh: 21 },
//     { ism: "Hasan", yosh: 22 },
//     { ism: "Husan", yosh: 18 }
//   ];

//   let natija = birinchiKattaTalaba(talabalar);
//   console.log(natija); // "VALI"

// 3-misol

// 4-misol

// let arr=[1,2,3,4,4,5,5,110, -1]

// function findarrnum (arr){
//     let res = arr.some(function(value){
//         if(value>0){
//             console.log('hammasi musbat');
//         }else if(value>100){
//             console.log('katta son bor');
//         }else('manfiy son bor')
//     })
//     return res
// }
// console.log((findarrnum(arr)));

// // 5-misol

// let arr=[1,2,3,4,5,6]
// function newkvadratelement (arr){
//     let res=[]
//      arr.foEach(function(value){
//         return res.push(value);
//      })
//     return res.map(function(value){
//         return value**2
//     })
// }
// console.log(newkvadratelement(arr));

// 6-misol

// let arr= [ 2000, 2333, 1800, 3300]

// function yangimaow(arr){

//     let res=arr.filter(function(value){
//  return value>=2000
//     })
//     res=res.map(function(value){
//         return value/100*10+value
//     })
// return res

// }
// console.log(yangimaow(arr));

// 8-misol

// Stringga oid masalalar
// 1-misol

// function toUpperCaseStr(str){

//     return str.toUpperCase()
// }
// console.log(toUpperCaseStr('salom salommmmm nma gap'));

// 2-misol

// function findSubs(str,word){
// return str.includes(word);
// }console.log(findSubs('salom qalesan', 'lom'));

// 3-misol
// function replacestr(str){
//     return str.replace('JAVASCRIPT', 'JS')
// }
// console.log(replacestr('JAVASCRIPT', 'JS'));

// // 4-misol
// const str = "salom salom salom ";
// function reversestr(str) {
//   let res = str.split(" ");
//   res=res.reverse();
// }
// console.log(reversestr(str));

// 5-misol


