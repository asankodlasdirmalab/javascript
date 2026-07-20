# JavaScript Tapşırıqları: Dərs 10-a kimi

### Tapşırıq 1: istifadəçi Məlumatı

Ad, yaş və tələbə saxlayan dəyişənlər yaradın və `console.log()` ilə göstərin

```javascript
span
```

### Tapşırıq 2: Məlumat tipi
Verilmiş müxtəlif tipli dəyişənlərin tiplərini `typeof` ilə  göstərin.

**JavaScript**

```
const a = 42;
const b = "React";
const c = undefined;
const d = null;
```

### Tapşırıq 3

`firstName` və `job` dəyişənlərini `${firstName}` (```)  istifadə edərək tək bir cümlədə birləşdirin.

**JavaScript**

```
const firstName = "Leyla";
const job = "Developer";
```

### Tapşırıq 4: Null və Undefined

iki `let` dəyişəni  yaradın ama birinciyə heç bir data təyin etmiyin, digərini isə `null` olaraq təyin edin. Aralarındakı fərqi  göstərin.


### Tapşırıq 5

İstifadəçinin yaşı 18-dən böyükdürsə "Giriş icazəlidir", əks halda "Giriş qadağandır" sözünü Ternary (`? :`) ilə yazın.


### Tapşırıq 6

Aşağıdakı dəyişənləri `==` və `===` ilə müqayisə edin və nəticələri konsolda göstərin.

**JavaScript**

```
const x = 5;
const y = "5";
```

### Tapşırıq 7: Falsy Dəyərlər

Verilmiş siyahıdakı dəyərlərdən hansıların `Boolean()` funksiyasında `false` qaytardığını yoxlayın: `0`, `"Hello"`, `""`, `null`, `[]`, `{}`.

### Tapşırıq 8

`??` sualdan istifadə edərək default dəyər yaradın

**JavaScript**

```
const ad = null;
```

### Tapşırıq 9: () => {}

 **Arrow Function** funksiyasilə iki ədəd toplayın və ekranda göstərin

### Tapşırıq 10: Default Parametr

İstifadəçiyə salam verən funksiya yazın; əgər ad göndərilməzsə, default olaraq "USer" desin.


### Tapşırıq 11: Return və Void

(`return`) və (`void`) funksiya arasındakı fərqli nəticəni  göstərin.

### Tapşırıq 12

Tək sətirlik arrow funksiyasında `return` sözünü və `{}` mötərizələrini istifadə etmədən bir ədədin kvadratını qaytarın.


### Tapşırıq 13

Aşağıdakı arrayın axırıncı elementini tapın `arr[arr.length - 1]` və ya `arr.at(-1)` 

**JavaScript**

```
const numbers = [10, 20, 30, 40, 50];
```

### Tapşırıq 14

Arrayın ilk iki elementini `a` və `b` dəyişənlərinə destructuring vasitəsilə təyin edin.

**JavaScript**

```
const colors = ["red", "green", "blue"];
```


### Tapşırıq 16: Basic Array Push/Pop

Arrayın sonuna yeni element əlavə edin, sonra son elementi silin və nəticəni ekranda göstərin.

### Tapşırıq 17: İç-içə Arraylər (Nested Arrays)

Verilmiş arraydəki "Target" sözünü indekslərlə göstərin.

**JavaScript**

```
const data = [1, [2, ["Target"]]];
```


### Tapşırıq 18

Obyektin `brand` dəyərini Dot notation ilə, `year` dəyərini isə Bracket notation ilə  göstərin.

**JavaScript**

```
const car = { brand: "BMW", year: 2022 };
```

### Tapşırıq 19

Obyektdən `title` və `price` dəyərlərini destructuring vasitəsilə götürün.

**JavaScript**

```
const product = { id: 1, title: "Phone", price: 800 };
```

### Tapşırıq 20

Obyektdən `name` dəyərini çıxararkən adını dəyişib `userName` edin.

**JavaScript**

```
const person = { id: 101, name: "Aysel" };
```


### Tapşırıq 22: Obyekt daxilində Funksiya

Obyektin içində  `getFullInfo` metodunu yazın. Həmin funksiya Laptopun adını və qiymətini ekranda göstərməlidir

**JavaScript**

```
const item = { name: "Laptop", price: 1500 };
```

### Tapşırıq 23

Dəyişəndə olan açar adından istifadə edərək obyektdən dəyəri götürün.

**JavaScript**

```
const key = "status";
const order = { id: 55, status: "Pending" };
```


### Tapşırıq 24: Standard For Loop

1-dən 10-a qədər cüt ədədləri  çıxaran `for` dövrü yazın.

### Tapşırıq 25: For...of ilə Array

`for...of` dövründən istifadə edərək arraydəki adları  göstərin.

**JavaScript**

```
const names = ["Ali", "Vali", "Samir"];
```

### Tapşırıq 26: Array Cəmi

`for` və ya `for...of` istifadə edərək rəqəmlər arrayindəki bütün ədədlərin cəmini tapın.

**JavaScript**

```
const nums = [5, 10, 15, 20];
```

### Tapşırıq 27

Verilmiş ədəd 0-dan böyük olduğu müddətdə hər addımda onu 2-yə bölən `while` dövrü yazın.


### Tapşırıq 28: .map() ilə Dəyişiklik

Verilmiş rəqəmlər arrayindəki hər bir ədədi 2-yə vuraraq yeni array yaradın.

**JavaScript**

```
const numbers = [1, 2, 3, 4];
```

### Tapşırıq 29: 

map funksiyası vasitəsi ilə aşağıdakı datanı ekranda göstərin

**JavaScript**

```
const users = [
  { id: 1, name: "Anar" },
  { id: 2, name: "Nigar" }
];
```

### Tapşırıq 30: .filter() ilə Filtrləmə

Qiyməti 50-dən böyük olan məhsulları filtrləyərək yeni array alın.

**JavaScript**

```
const prices = [20, 60, 15, 89, 45, 100];
```

### Tapşırıq 31: .filter() Obyektlər Üzərində

Yalnız aktiv olan (`isActive: true`) istifadəçiləri filtrləyin və ekranda göstərin.

**JavaScript**

```
const team = [
  { name: "Murad", isActive: true },
  { name: "Elnur", isActive: false },
  { name: "Aynur", isActive: true }
];
```

### Tapşırıq 32: .find() ilə Axtarış

ID-si 3 olan istifadəçi obyektini `.find()` metodu ilə tapın.

**JavaScript**

```
const list = [
  { id: 1, name: "X" },
  { id: 2, name: "Y" },
  { id: 3, name: "Z" }
];
```

### Tapşırıq 33: .includes() Yoxlanışı

Arraydə "React" sözünün olub-olmadığını yoxlayın və `true`/`false` nəticəsini göstərin.

**JavaScript**

```
const tech = ["HTML", "CSS", "JS", "React"];
```

### Tapşırıq 34: .forEach()

`.forEach()` istifadə edərək arraydəki hər bir mətni böyük hərflərlə  göstərin.

**JavaScript**

```
const words = ["apple", "banana"];
```

### Tapşırıq 35: .sort() Rəqəmlər Üçün

Rəqəmlər arrayini kiçikdən böyüyə doğru çeşidləyin.

**JavaScript**

```
const unsorted = [40, 100, 1, 5, 25, 10];
```

### Tapşırıq 36: Metodları Zəncirvari İstifadə Etmək (Chaining)

Yalnız cüt ədədləri filtrləyin və sonra həmin cüt ədədlərin kvadratından ibarət array yaradın (`.filter().map()`).

**JavaScript**

```
const baseNums = [1, 2, 3, 4, 5, 6];
```


### Tapşırıq 37: setTimeout

1.5 saniyə sonra  "Məlumat yükləndi" mətni çıxaran `setTimeout` funksiyası yazın.

### Tapşırıq 38: Async / Await Baza Structure

`async` funksiya yaradın və daxilində 1 saniyə gözlədikdən sonra mətn qaytaran sadə struktur qurun.

### Tapşırıq 39: Fetch API ilə Dəyər Çəkmək

`https://jsonplaceholder.typicode.com/todos/1` unvanından `fetch` vasitəsilə datanı çəkin və  göstərin ekranda göstərin

### Tapşırıq 40

API-dən bütün todo məlumatlarını (`/todos`) götürü,  və yalnız `completed: true` olan ilk 5 elementi  göstərin.

**JavaScript**

```
const api_url = "https://jsonplaceholder.typicode.com/todos";
```
