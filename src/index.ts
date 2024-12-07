// =====1=====

// bu arrayda number va string qatnashishi mumkin
const arr: Array<number | string> = [1, "salom", "no or yes", 5];

// bu arrayda faqat number type dagi qiymatlar qatnasha oladi
const arr2: number[] = [5, 3, 6];

// bu arrayda faqat string type dagi qiymatlar qatnasha oladi
const arr3: string[] = ["salom", "bu typescript"];

// bu array Array constructor orqali yaratildi va oziga faqat boolean qiymatini oladi
const arr4: boolean[] = new Array(true, false, true, true);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// =====2=====

// bu tuplega 3 ta qiymat berish shart, albatta ularni qiymatlari ham to'g'ri ketma-ketlikda tushishi shart
let tuple: [string, number, boolean] = ["hello world", 45, true];

// bu yerda bitta number va bitta boolean type beriladi va xohlagancha string typedagi qiymat bersak boladi
const tuple2: [number, boolean, ...string[]] = [
  4,
  true,
  "salom",
  "hello",
  "sava",
];

// =====3=====

// bu yerda Grade faqat number type bo'lishi mumkin
type Grade = number;

let Anvar: Grade = 5;

// =====4=====

// bu yerda union ishlatdik va biz x o'zgaruvchisiga shu uchta data type larning biriga mos bo'lgan qiymat bera olamiz
var x: number | string | bigint = 1n;
console.log(x);

// =====5=====

// bu yerda x va y ga number data type berilde endi bu funksiyaga faqat number typedagi qiymat berish mumkin
function addTwoNumber(x: number, y: number): number {
  return x + y;
}

console.log(addTwoNumber(5, 5));

// void funksiya - bu return qaytarmaydigan funksiya hioblanadi
function addTwoNumberVoid(x: number, y: number): void {
  console.log(x + y);
}

addTwoNumberVoid(5, 6);

// =====6=====

// bu yerda biz type va qiymatlarni berib qoydik, endi bu type ishlatilganda faqat shu qiymatlardan birini tanlashi mumkin
type brand = "iphone" | "samsung" | "xiaomi" | 5;

let phone: brand = "iphone";
let phone2: brand = 5;

console.log(phone, phone2);

// =====7=====

// mana shu object type yaratish hisoblanadi
type person = {
  name: string;
  age: number;
  gender?: boolean;
};

// tepada gender? bu yerdagi so'roq belgisi gender o'zgaruvchisini ixtiyoriy qilib qo'yadi, bu degani genderni bermasangiz ham bo'ladi
const user: person = {
  name: "Sarvar",
  age: 16,
};

// =====8=====

// bu funksiyada age parametrini optional qilib qoydim
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}!`);
  console.log(`You are ${age} years old.`);
}

greet("Abduvoris");

// bu funksiyada age parametriga default qiymat berib qoydim, endi agar age berilmasa u odamni age 19 ga teng bolib qolaveradi
function greet2(name: string, age: number = 19): void {
  console.log(`Hello, ${name}!`);
  console.log(`You are ${age} years old.`);
}

greet2("Abduvoris");

// =====9=====

// readonly bilan biz obyektni ma'lum bir propertylarini freeze qilib qo'yishimiz mumkin, bu degani obyektni ba'zi propertylarini faqat o'qish mumkin
type Model = {
  modelName: string;
  readonly year: number;
  readonly fuel: string;
};

const car: Model = {
  modelName: "Mitsubishi evo10",
  year: 2007,
  fuel: "petrol",
};

// =====10=====

// bu type assertion hisoblanadi va bu yerda o'zgaruvchi typeni boshqacha usulda belgilashdir
let num = <number>41;
let letter = "a" as string;
