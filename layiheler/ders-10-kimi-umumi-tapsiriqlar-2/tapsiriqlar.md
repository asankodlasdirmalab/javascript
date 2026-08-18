### Dərs 1–2: Giriş, Variables və Primitive Data Types

#### Tapşırıq 1

`let` və `const` istifadə edərək ad və yaş dəyişənləri elan edin. Daxil edilən məlumatları `console.log()` vasitəsilə konsola çıxarın.
*Kod Nümunəsi / Şablon:*

```javascript
let age = 20;
const firstName = "Elnur";
console.log(firstName, age);
```

#### Tapşırıq 2

Aşağıdakı dəyişənlərin data tiplərini `typeof` operatoru ilə yoxlayın və nəticəni konsola yazdırın.
*Kod Nümunəsi / Şablon:*

```javascript
let count = 42;
let title = "JavaScript";
let isActive = true;
let data;
let info = null;

console.log(typeof count);
```

#### Tapşırıq 3

Template Literal (backtick `` ` ``) istifadə edərək `city` və `country` dəyişənlərini bir cümlə daxilində birləşdirib konsola çıxarın.
*Kod Nümunəsi / Şablon:*

```javascript
const city = "Bakı";
const country = "Azərbaycan";
const result = `Mən ${city} şəhərində, ${country} ölkəsində yaşayıram.`;
```

#### Tapşırıq 4

`null` və `undefined` dəyərlərinə malik iki dəyişən təyin edin və onların `typeof` nəticələrini konsolda müqayisə edin.
*Kod Nümunəsi / Şablon:*

```javascript
let emptyVal = null;
let notAssigned;
console.log(typeof emptyVal, typeof notAssigned);
```

#### Tapşırıq 5

`BigInt` və `Symbol` data tiplərinə aid sadə nümunələr yaradın və tiplərini konsola yazdırın.
*Kod Nümunəsi / Şablon:*

```javascript
const bigNum = 9007199254740991n;
const sym = Symbol("id");
```

---

### Dərs 3: Riyazi və String Operatorlar

#### Tapşırıq 6

İki ədəd üzərində toplama, çıxma, vurma, bölmə, qalıq alma (`%`) və qüvvətə yüksəltmə (`**`) əməliyyatlarını yerinə yetirin.
*Kod Nümunəsi / Şablon:*

```javascript
let num1 = 16;
let num2 = 3;
console.log(num1 % num2);
console.log(num1 ** num2);
```

#### Tapşırıq 7

Aşağıdakı implicit type conversion (səssiz tip çevrilməsi) əməliyyatlarının nəticələrini konsolda yoxlayın.
*Kod Nümunəsi / Şablon:*

```javascript
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * "2");
```

#### Tapşırıq 8

Assignment operatorlarından (`+=`, `-=`, `*=`, `/=`) istifadə edərək `score` dəyişəninin dəyərini mərhələli şəkildə dəyişin.
*Kod Nümunəsi / Şablon:*

```javascript
let score = 50;
score += 20;
score *= 2;
```

#### Tapşırıq 9

Increment (`++`) və Decrement (`--`) operatorlarının prefix (`++x`) və postfix (`x++`) formalarının fərqini konsolda nümayiş etdirin.
*Kod Nümunəsi / Şablon:*

```javascript
let a = 5;
let b = 5;
console.log(a++); // Postfix
console.log(++b); // Prefix
```

---

### Dərs 4: Conditions (Şərtlər)

#### Tapşırıq 10

`==` və `===` operatorlarının fərqini göstərən şərt yazın.
*Kod Nümunəsi / Şablon:*

```javascript
let x = "100";
let y = 100;

if (x === y) {
  console.log("Dəqiq bərabərdir");
} else if (x == y) {
  console.log("Zəif bərabərdir");
}
```

#### Tapşırıq 11

Tələbənin imtahan balına (`score`) əsasən qiymətini ("A", "B", "C", "F") təyin edən `if...else if...else` strukturu qurun.
*Kod Nümunəsi / Şablon:*

```javascript
let score = 78;

if (score >= 90) {
  // Logic
} else if (score >= 75) {
  // Logic
}
```

#### Tapşırıq 12

İstifadəçinin yaşından asılı olaraq icazə durumunu Ternary Operator (`? :`) vasitəsilə təyin edin.
*Kod Nümunəsi / Şablon:*

```javascript
let age = 18;
let status = age >= 18 ? "İcazə verildi" : "İcazə verilmədi";
```

#### Tapşırıq 13

`switch...case` strukturundan istifadə edərək həftənin gün nömrəsinə (1-7) uyğun gün adını konsola çıxarın.
*Kod Nümunəsi / Şablon:*

```javascript
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Bazardüzü");
    break;
  // dahi vakansiyalar
  default:
    console.log("Nəzərdə tutulmayan gün");
}
```

#### Tapşırıq 14

Falsy dəyərləri (`false`, `0`, `""`, `null`, `undefined`, `NaN`) `if` şərti daxilində yoxlayın.
*Kod Nümunəsi / Şablon:*

```javascript
let testVal = "";

if (!testVal) {
  console.log("Bu dəyər falsy-dir!");
}
```

#### Tapşırıq 15

Nullish Coalescing (`??`) və OR (`||`) operatorlarının fərqini `0` və `""` dəyərləri üçün nümayiş etdirin.
*Kod Nümunəsi / Şablon:*

```javascript
let inputVal = 0;
let res1 = inputVal || 100;
let res2 = inputVal ?? 100;
```

---

### Dərs 5: Functions və Scope

#### Tapşırıq 16

İki parametr qəbul edib onların hasilini qaytaran (`return`) klassik `function` yazın.
*Kod Nümunəsi / Şablon:*

```javascript
function multiply(a, b) {
  return a * b;
}
```

#### Tapşırıq 17

Tapşırıq 16-da yazılmış funksiyanı Arrow Function sintaksisinə çevirin.
*Kod Nümunəsi / Şablon:*

```javascript
const multiply = (a, b) => a * b;
```

#### Tapşırıq 18

Default parametrdən istifadə edərək istifadəçini salamlayan funksiya hazırlayın.
*Kod Nümunəsi / Şablon:*

```javascript
const greetUser = (userName = "Qonaq") => {
  return `Xoş gəldiniz, ${userName}!`;
};
```

#### Tapşırıq 19

Global scope, Function scope və Block scope fərqini göstərən kod nümunəsi qurun.
*Kod Nümunəsi / Şablon:*

```javascript
const globalVar = "Global";

function scopeTest() {
  let funcVar = "Function";
  if (true) {
    let blockVar = "Block";
  }
}
```

#### Tapşırıq 20

Hoisting davranışını `let` / `const` və `function declaration` üçün sınaqdan keçirin.
*Kod Nümunəsi / Şablon:*

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

#### Tapşırıq 21

Rekursiv funksiya (Recursion) vasitəsilə verilmiş ədədin faktorialını hesablayın.
*Kod Nümunəsi / Şablon:*

```javascript
function calcFactorial(n) {
  if (n <= 1) return 1;
  return n * calcFactorial(n - 1);
}
```

#### Tapşırıq 22

Dərhal icra olunan funksiya (IIFE - Immediately Invoked Function Expression) yazın.
*Kod Nümunəsi / Şablon:*

```javascript
(() => {
  console.log("IIFE dərhal işə düşdü!");
})();
```

#### Tapşırıq 23

Callback funksiya qəbul edən və daxilində həmin callback-i çağıran üst səviyyə funksiya yazın.
*Kod Nümunəsi / Şablon:*

```javascript
function processUser(name, callback) {
  console.log(`İstifadəçi: ${name}`);
  callback();
}
```

---

### Dərs 6: Arrays

#### Tapşırıq 24

Proqramlaşdırma dillərindən ibarət bir array yaradın və indeksi istifadə edərək 1-ci və sonuncu elementi konsola yazdırın.
*Kod Nümunəsi / Şablon:*

```javascript
const languages = ["JavaScript", "Python", "Java", "C#"];
console.log(languages[0]);
console.log(languages[languages.length - 1]);
```

#### Tapşırıq 25

`at()` metodundan və negative indexing imkanından istifadə edərək array-in sonuncu elementini əldə edin.
*Kod Nümunəsi / Şablon:*

```javascript
const items = ["Laptop", "Phone", "Tablet"];
console.log(items.at(-1));
```

#### Tapşırıq 26

İkiölçülü array-dən (Nested array) konkret elementi çıxarmaq üçün indeksləmə tətbiq edin.
*Kod Nümunəsi / Şablon:*

```javascript
const grid = [
  [10, 20],
  [30, 40]
];
console.log(grid[1][0]); // 30
```

#### Tapşırıq 27

Array Destructuring vasitəsilə array-in ilk 3 elementini ayrı-ayrı dəyişənlərə mənimsədin.
*Kod Nümunəsi / Şablon:*

```javascript
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
```

---

### Dərs 7: Objects

#### Tapşırıq 28

Tələbə haqqında məlumatları saxlayan obyekt (`object`) yaradın (ad, yaş, ixtisas).
*Kod Nümunəsi / Şablon:*

```javascript
const student = {
  name: "Leyla",
  age: 21,
  major: "Computer Science"
};
```

#### Tapşırıq 29

Obyektin xassələrinə Dot Notation və Bracket Notation istifadə edərək müraciət edin.
*Kod Nümunəsi / Şablon:*

```javascript
console.log(student.name);
console.log(student["major"]);
```

#### Tapşırıq 30

Obyekt daxilində metod (funksiya) yaradın və `this` açar sözündən istifadə edərək obyektin xassəsini qaytarın.
*Kod Nümunəsi / Şablon:*

```javascript
const account = {
  owner: "Aysel",
  balance: 500,
  getBalanceInfo() {
    return `${this.owner} balansında ${this.balance} AZN var.`;
  }
};
```

#### Tapşırıq 31

Object Destructuring istifadə edərək obyektin xassələrini çıxarın və alias (yeni dəyişən adı) təyin edin.
*Kod Nümunəsi / Şablon:*

```javascript
const product = { title: "Phone", price: 1200 };
const { title: productName, price } = product;
```

---

### Dərs 8: Loops (Dövrlər)

#### Tapşırıq 32

Klassik `for` dövrü istifadə edərək 1-dən 20-yə qədər olan cüt ədədləri konsola çıxarın.
*Kod Nümunəsi / Şablon:*

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

#### Tapşırıq 33

`for...of` dövründən istifadə edərək array elementlərini tək-tək ekrana yazdırın.
*Kod Nümunəsi / Şablon:*

```javascript
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log(color);
}
```

#### Tapşırıq 34

`while` dövrü ilə verilmiş ədədi 0-a qədər azaldan kod yazın.
*Kod Nümunəsi / Şablon:*

```javascript
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
```

#### Tapşırıq 35

`do...while` dövrünün şərt yanlış olsa belə ən azı bir dəfə icra olunduğunu nümayiş etdirin.
*Kod Nümunəsi / Şablon:*

```javascript
let num = 10;
do {
  console.log("İcra olundu");
} while (num < 5);
```

#### Tapşırıq 36

Dövr daxilində `break` operatorundan istifadə edərək axtarılan element tapıldıqda dövrü dayandırın.
*Kod Nümunəsi / Şablon:*

```javascript
const numbers = [5, 12, 8, 130, 44];
for (let num of numbers) {
  if (num > 100) break;
  console.log(num);
}
```

#### Tapşırıq 37

`continue` operatoru ilə dövrün müəyyən addımını ötürən kod nümunəsi qurun.
*Kod Nümunəsi / Şablon:*

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

## 📙 Modul 2: Data ilə İşləmək

### Dərs 9: Array Metodları

#### Tapşırıq 38

`push()` və `unshift()` metodları ilə array-in sonuna və əvvəlinə yeni elementlər əlavə edin.
*Kod Nümunəsi / Şablon:*

```javascript
const list = ["B", "C"];
list.push("D");
list.unshift("A");
```

#### Tapşırıq 39

`pop()` və `shift()` metodları ilə array-in sonuncu və birinci elementini silin.
*Kod Nümunəsi / Şablon:*

```javascript
const list = ["X", "A", "B", "Y"];
list.pop();
list.shift();
```

#### Tapşırıq 40

`splice()` metodundan istifadə edərək array-in ortasından element silin və əvəzinə yeni element əlavə edin.
*Kod Nümunəsi / Şablon:*

```javascript
const cities = ["Bakı", "Gəncə", "Sumqayıt"];
cities.splice(1, 1, "Şəki");
```

#### Tapşırıq 41

`includes()` metodu vasitəsilə array-də müəyyən elementin olub-olmadığını yoxlayın.
*Kod Nümunəsi / Şablon:*

```javascript
const roles = ["admin", "editor", "user"];
console.log(roles.includes("admin"));
```

#### Tapşırıq 42

`find()` metodu vasitəsilə obyektlərdən ibarət array-dən id-yə uyğun ilk elementi tapın.
*Kod Nümunəsi / Şablon:*

```javascript
const users = [
  { id: 1, name: "Anar" },
  { id: 2, name: "Nigar" }
];
const foundUser = users.find(u => u.id === 2);
```

#### Tapşırıq 43

`map()` metodundan istifadə edərək ədədlər array-indəki hər bir elementi kvadratına yüksəldin.
*Kod Nümunəsi / Şablon:*

```javascript
const nums = [2, 3, 4, 5];
const squares = nums.map(n => n ** 2);
```

#### Tapşırıq 44

`filter()` metodu vasitəsilə qiyməti 50-dən yuxarı olan məhsulları seçib yeni array yaradın.
*Kod Nümunəsi / Şablon:*

```javascript
const prices = [15, 60, 45, 100, 80];
const expensive = prices.filter(p => p > 50);
```

#### Tapşırıq 45

`forEach()` metodu ilə array-in hər bir elementini konsola çap edin.
*Kod Nümunəsi / Şablon:*

```javascript
const names = ["Rauf", "Kənan", "Nərgiz"];
names.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

#### Tapşırıq 46

Ədədlər array-ini `sort()` metodu vasitəsilə artan və azalan sırada çeşidləyin.
*Kod Nümunəsi / Şablon:*

```javascript
const numbers = [40, 100, 1, 5, 25];
const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);
```

#### Tapşırıq 47

`reverse()` metodundan istifadə edərək array-in sırasını tərsinə çevirin.
*Kod Nümunəsi / Şablon:*

```javascript
const order = ["First", "Second", "Third"];
order.reverse();
```

---

### Dərs 10: Async & Await, Fetch API və JSON

#### Tapşırıq 48

`JSON.stringify()` və `JSON.parse()` metodları vasitəsilə obyekti JSON mətninə və əksinə çevirin.
*Kod Nümunəsi / Şablon:*

```javascript
const userObj = { id: 1, name: "Elnur", active: true };
const jsonStr = JSON.stringify(userObj);
const parsed = JSON.parse(jsonStr);
```

#### Tapşırıq 49

`fetch()` API və `async/await` istifadə edərək uzaq serverdən data çəkən funksiya yazın.
*Kod Nümunəsi / Şablon:*

```javascript
async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
```

#### Tapşırıq 50

`try...catch` blokundan istifadə edərək `async/await` sorğusu zamanı yaranan xətaları idarə edin (error handling).
*Kod Nümunəsi / Şablon:*

```javascript
async function safeFetch() {
  try {
    const res = await fetch("https://invalid-url-domain-test.com");
    const data = await res.json();
  } catch (error) {
    console.error("Xəta baş verdi:", error.message);
  }
}
```
