# Tapşırıq 5

`renkler` arrayin 1-ci indeksindəki elementi silib yerinə "Sarı" yazın.

```
const renkler = ["Qırmızı", "Yaşıl", "Mavi"];
```

### Tapşırıq 6

`aylar` arrayin 1-ci indeksindən başlayaraq 3-cü indeksinə qədər olan hissəsini kəsib yeni arrayə tətbiq edin .

```
const aylar = ["Yanvar", "Fevral", "Mart", "Aprel"];
```

### Tapşırıq 7

Orijinal arrayi dəyişmədən, 1-ci indeksindəki elementi "X" ilə əvəzləyin

```
const herfler = ["A", "B", "C"];
```

### Tapşırıq 8

Orijinal arrayə toxunmadan elementləri əlifba sırası ilə düzün

```
const sirketler = ["Google", "Apple", "Microsoft"];
```

### Tapşırıq 9

Orijinal arrayi dəyişmədən sıranı tərsinə çevirin

```
const kodlar = [1, 2, 3];
```

### Tapşırıq 10

arraydə "Gilas" elementinin hansı indeksdə yerləşdiyini tapın.

```
const meyveler = ["Alma", "Gilas", "Banan", "Gilas"];
```

### Tapşırıq 11

arraydə təkrarlanan "Gilas" elementinin ən sonuncu indeksini tapın.

```
const meyveler = ["Alma", "Gilas", "Banan", "Gilas"];
```

### Tapşırıq 12

arraydə "BMW" markasının olub-olmadığını yoxlayın.

```
const masinlar = ["Opel", "Ford", "Hyundai"];
```

### Tapşırıq 13

Obyektlərdən ibarət arraydə id-si 102 olan istifadəçi obyektinin özünü tapın.

```
const users = [{id: 101, ad: "Ali"}, {id: 102, ad: "Veli"}];
```

### Tapşırıq 14

Adı "Veli" olan istifadəçinin arraydəki indeksini tapın.

```
const users = [{id: 101, ad: "Ali"}, {id: 102, ad: "Veli"}];
```

### Tapşırıq 15

`map` metodundan istifadə edərək arraydəki hər bir ədədi 2-yə vurub yeni array yaradın.

```
const qiymetler = [10, 20, 30];
```

### Tapşırıq 16

`filter` metodundan istifadə edərək arraydən yalnız cüt ədədləri seçib yeni arrayə təyin edin.

```
const siyahı = [1, 2, 3, 4, 5, 6];
```

### Tapşırıq 17

`reduce` metodundan istifadə edərək arraydəki bütün ədədlərin cəmini tapın.

```
const balans = [15, 25, 10];
```

### Tapşırıq 18

`forEach` metodundan istifadə edərək hər bir elementin indeksini və dəyərini konsolda göstərin.

```
const adlar = ["Emin", "Aysel"];
```

### Tapşırıq 19

Rəqəmlərdən ibarət arrayi düzgün şəkildə artan sıra ilə çeşidləyin.

```
const xallar = [40, 100, 1, 5, 25];
```

### Tapşırıq 20

Rəqəmlərdən ibarət arrayi azalan sıra ilə çeşidləyin.

```
const xallar = [40, 100, 1, 5, 25];
```

### Tapşırıq 21

array daxilindəki elementlərin sırasını tərsinə çevirin.

```
const elementler = ["A", "B", "C"];
```

### Tapşırıq 22

İki fərqli arrayi `concat` metodu ilə tək bir arraydə birləşdirin.

```
const qrup1 = ["HTML", "CSS"];
const qrup2 = ["JS", "React"];
```

### Tapşırıq 23

arraydəki elementləri aralarında " | " işarəsi olacaq şəkildə birləşdirib tək bir String-ə çevirin.

```
const teqler = ["javascript", "frontend", "web"];
```

### Tapşırıq 24

Verilmiş vergüllü mətni parçalayaraq elementləri array şəklinə gətirin (`split`).

```
const data = "Baku,Ganja,Sumqayit";
```

### Tapşırıq 25

İç-içə yerləşən ikiölçülü arrayi `flat` metodu ilə düzləşdirin

```
const matris = [1, 2, [3, 4], [5, 6]];
```

### Tapşırıq 26

arraydə **ən azı bir** mənfi ədədin olub-olmadığını `some` metodu ilə yoxlayın.

```
const dereceler = [12, 25, -3, 19];
```

### Tapşırıq 27

arraydəki **bütün** istifadəçilərin yaşının 18-dən böyük və ya bərabər olduğunu `every` metodu ilə təsdiqləyin.

```
const yaslar = [20, 25, 18, 30];
```

### Tapşırıq 28

Mövcud array 1-ci indeksindən 3-cü indeksinə qədər olan hissəsini (3 daxil deyil) statik olaraq 0 rəqəmi ilə doldurun (`fill`).

```
const test = [9, 9, 9, 9, 9];
```

### Tapşırıq 29

`Array.from` metodundan istifadə edərək "1234" string ifadəsini rəqəmlərdən ibarət arrayə çevirin.

```
const str = "1234";
```

### Tapşırıq 30

`Array.of` metodundan istifadə edərək ötürülən tək-tək parametrlərdən yeni bir array qurun.

### Tapşırıq 31

arraydəki yazılardan ibarət elementlərin hamısını böyük hərflərə (uppercase) çevrilmiş yeni array halına gətirin (`map`).

```
const diller = ["js", "html", "css"];
```

### Tapşırıq 32

Məhsullar arraydən qiyməti 50 AZN-dən ucuz olanları filterləyin.

```
const mallar = [{ad: "A", q: 30}, {ad: "B", q: 80}, {ad: "C", q: 45}];
```

### Tapşırıq 33

səbətdəki məhsulların ümumi sayını (miqdarını) `reduce` ilə hesablayın.

```
const sebet = [{ad: "Köynək", say: 2}, {ad: "Şalvar", say: 1}];
```

### Tapşırıq 34

Mətnlərdən ibarət arrayi əlifba sırasının tərsinə (Z-dən A-ya) doğru çeşidləyin.

```
const telebeler = ["Zakir", "Anar", "Bəhruz"];
```

### Tapşırıq 35

`splice` metodu ilə 2-ci indeksdə yerləşən elementi silin, lakin yerinə yeni heç nə əlavə etməyin.

```
const elementler = ["A", "B", "C", "D"];
```

### Tapşırıq 36

arraydə "Admin" roluna sahib ən azı bir istifadəçinin olub-olmadığını yoxlayın.

```
const users = [{ad: "A", rol: "user"}, {ad: "B", rol: "admin"}];
```

### Tapşırıq 37

arraydəki bütün ədədlərin müsbət olub-olmadığını yoxlayın.

```
const test = [5, 8, -1, 12];
```

### Tapşırıq 39

Boş bir array yaradın və `fill` metodu ilə onu tamamilə "A" hərfləri ilə doldurun.

```
const bos = new Array(3);
```

### Tapşırıq 40

Verilmiş array kopyasını orijinalı dəyişmədən `slice()` vasitəsilə əldə edin.

```
const anaarray = ["JS", "TS"];
```
