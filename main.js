//Q1
// function myFunction(num) {
//   if (num <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// myFunction(-4);

//************************************************************** */
//Q2
// function next(num) {
//   console.log(num + 1);
// }
// next(4);

//************************************************************** */

//Q3
// fArr = [];
// Arr = ["laith", "num9", "num4", "num5", "num6", "num7", "ali"];
// function strnum(array) {
//   array.forEach((element) => {
//     for (i = 0; i < element.length; i++) {
//       if (isNaN(element[i])) {
//         continue;
//       } else {
//         fArr.push(element);
//       }
//     }
//   });
//   console.log(fArr);
// }

// strnum(Arr);

//************************************************************** */

// Q4
// function check(num) {
//   if (num == 0) {
//     console.log("even");
//   } else if (num == 1) {
//     console.log("odd");
//   } else {
//     check(Math.abs(num) - 2);
//   }
// }
// check(-9);

//************************************************************** */
// Q5 (unsolved)

// let ch1=''
// let ch2=''
// function swap(str, ch1, ch2) {
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if ((str[i] = ch1)) {
//       str.replace(str[i], ch2);
//     } else if ((str[i] = ch2)) {
//       str[i] = ch1;
//     }
//   }
//   console.log(str);
// }
// swap("aaadadd", "a", "d");

//************************************************************** */
// Q6

// arr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// function names(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// names(arr);

//************************************************************** */
// Q7

// arr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// function names(array) {
//   array.forEach((element) => {
//     console.log(element);
//   });
// }
// names(arr);

//************************************************************** */
// Q8

// let newSeries = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// fullArray = [];
// idArray = [];
// function twoPara(array) {
//   array.forEach((element) => {
//     idArray.push({ id: element.id, title: element.title });
//     // fullArray.push(idArray);
//   });
//   console.log(idArray);
// }
// twoPara(newSeries);

//************************************************************** */
// Q9
