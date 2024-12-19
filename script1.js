// let str = "Hellow maaan";
// console.log(str.length);  // 6

// let str = "  Привет, мир!  ";
// console.log(str.trim());  // "Привет, мир!"


// let str1 = "Привет, ";
// let str2 = "мир!";
// let result = str1.concat(str2);
// console.log(result);  // "Привет, мир!"
// 

// let str = "Привет";
// console.log(str.toUpperCase());  // "ПРИВЕТ"
// 

// let str = "Привет";
// console.log(str.toLowerCase());  // "привет"
// 

// let str = "Привет, мир!";
// let newStr = str.replace("мир", "всем");
// console.log(newStr);  // "Привет, всем!"
// 

// let sentence = "JavaScript — отличный язык программирования.";
// console.log(sentence.includes("отличный")); // true
// console.log(sentence.includes("Python"));   // false
// 


let userName = prompt("What is your name?");
const letter = prompt("Введите букву, которую хотите проверить:");

if (userName.includes(letter)) {
    alert(`Правильно: имя содержит ${letter} букву`);
} else {
    alert(`Неправильно: имя не содержит ${letter} букву`);
}