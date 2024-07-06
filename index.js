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
// function transformation(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push(valeu**2)
//     });
//     return res.map(function(valeu){
//         return valeu
//     });
// }
// console.log(transformation(arr2));

// const res4 = (arr) =>{
//     let reduce = [];
//     arr.forEach(function(valeu){
//         reduce.push(valeu**2)
//     })
//     return reduce.map(function(valeu){
//         return valeu;
//     });
// };
// console.log(res4(arr2));

// 6-misol
// const oylik = [
//     {name: 'Davlatbek', birinchi: 1950},
//     {name: 'Abdulla',birinchi: 2656},
//     {name:'Shohjaxon',birinchi: 456}
// ];
// function findHardworker(arr){
//     let res =  arr.filter(function(valeu){
//         return valeu.birinchi >= 2000
//     });
//     let res1 =  res.reduce(function (valeu){
//       return birinchi.valeu * 1,1;
//     })
    
//     return res1;
    
// };
// console.log(findHardworker(oylik));


//7-misol
// const students = [
//   { name: "vali", ball: 90, age: 18 },
//   { name: "bekmurod", ball: 88, age: 20 },
//   { name: "qodirjon", ball: 80, age: 15 },
// ];
// function findLastGrow(arr){
//   let res =  arr.find(function(valeu){
//     return valeu.ball==80
//   })
//   console.log(res);
//   return arr.filter(function(valeu){
//     return valeu.ball>80
//   })
// };
// console.log(findLastGrow(students));

//STRINg ga oid misollar

// 1-misol
// const res = function(str) {
//     return str.toUpperCase()
// };
// console.log(res('salom dunyo'));

//2-misol
// const res = function (str, element){
//     return str.includes(element)
// };
// console.log(res('salom dunyo', 'yo'));

//3-misol
// const res = function (str, element){
//     return str.replace(str, element)
// };
// console.log(res('JavaScript','JS'));

//4-misol:

// const res = function (str){
//     let res2 = str.split('');
//     return res2.reverse().join('');
// };
// console.log(res('salom dunyo'));


// 5-misol

// const treamsUse = function (str){
//     return str.trim().toUpperCase();
// };
// console.log(treamsUse('    salom dunyo    '));
