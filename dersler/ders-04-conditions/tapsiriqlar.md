
### Tapşırıq 1: `if` və `else`

Əgər "bal" 50-dən böyükdürsə konsola "Keçdi" əks halda "Kəsildi" yazılsın

**JavaScript**

```
let bal = 60;
```

### Tapşırıq 2: `else if`

if, else if və else istifadə edərək yoxla:
"Qırmızı" isə -> "Dayan", "Sarı" isə -> "Hazırlaş", "Yaşıl" isə -> "Keç" yazılsın

**JavaScript**

**JavaScript**

```
let seftafor = "Sarı"; 
```

### Tapşırıq 3: `switch`

switch-case istifadə edərək "S" üçün "Kiçik", "M" üçün "Orta", "L" üçün "Böyük" yazılsın. Default olaraq "Tapılmadı" yazılsın

**JavaScript**

```
let size = "M"; // Dəyərlər: "S", "M", "L"
```

### Tapşırıq 4: Ternary Operator

ternary operatordan istifadə edərək yas dəyərini yoxlayın

**JavaScript**

```
let yas = 20;
```

### Tapşırıq 5: Falsy Dəyərlər

Falsy dəyərlər istifadə edərək şərtlər yazın

### Tapşırıq 6: Müqayisə Operatorları (`==` və `===`)

İki ədədi həm rəqəm kimi həmdə string kimi müqayisə edin

### Tapşırıq 7: Məntiqi Operator `&&` (AND - VƏ)

Əgər bilet və passport varsa konsolda "İcazə olar" yazılsın

**JavaScript**

```
let bilet = true;
let passport = true;
```

### Tapşırıq 8: Məntiqi Operator `||` (OR - VƏ YA)

Həmin şərti və ya opertaru ilə yazın

### Tapşırıq 9: Məntiqi Operator `!` (NOT - DEYİL)

### Tapşırıq 10: Böyük-Kiçik Operatorları (`>` , `<=`)

Yaş dəyəri yaradın və böyük kiçik operatoru ilə yoxlayın

**JavaScript**

```
let age = 18;
```

### Tapşırıq 11: `if` və `else` (İstifadəçi Balansı)

Əgər `mebleg` dəyəri `balans`-dan kiçik və ya bərabərdirsə konsola "Ödəniş uğurludur", əks halda "Balansda kifayət qədər vəsait yoxdur" yazılsın.

**JavaScript**

```
let balans = 50;
let mebleg = 30;
```

### Tapşırıq 12: `else if` (Hava Temperaturu)

if, else if və else istifadə edərək temperaturu yoxlayın: 15-dən kiçikdirsə -> "Soyuqdur", 15 ilə 25 arasındadırsa -> "Mülayimdir", 25-dən böyükdürsə -> "İstidir" yazılsın.

**JavaScript**

```
let temp = 22;
```

### Tapşırıq 13: `switch` (Həftənin Günləri)

switch-case istifadə edərək 1 üçün "Bazar ertəsi", 2 üçün "Çərşənbə axşamı", 3 üçün "Çərşənbə" yazılsın. Digər bütün rəqəmlər üçün default olaraq "Yanlış gün" yazılsın.

**JavaScript**

```
let gun = 2;
```

### Tapşırıq 14: Ternary Operator (Giriş İcazəsi)

Ternary operatordan istifadə edərək, əgər `isLoggedIn` dəyəri true-dursa "Xoş gəldiniz", false-dursa "Zəhmət olmasa daxil olun" mesajını bir dəyişənə mənimsədib konsola yazdırın.

**JavaScript**

```
let isLoggedIn = false;
```

### Tapşırıq 15: Truthy Dəyərlər

JavaScript-də içi dolu string (`"Baku"`), ixtiyari rəqəm (`42`) və ya boş obyekt (`{}`) truthy (yəni `true`) qəbul edilir. Bu dəyərlərdən birini birbaşa `if` şərtinin daxilinə qoyaraq şərt yazın.

### Tapşırıq 16: Müqayisə Operatorları (`!=` və `!==`)

Eyni dəyərə malik amma tipləri fərqli olan iki dəyişəni qeyri-bərabərlik (`!=` və `!==`) operatorları ilə yoxlayın və konsolda fərqi görün.

**JavaScript**

```
let kod1 = 555;
let kod2 = "555";
```

### Tapşırıq 17: Məntiqi Operator `&&` (Giriş İmtahanı)

Əgər tələbənin imtahan balı 600-dən böyükdürsə **VƏ** kəsiri yoxdursa (`kesir == false`), konsola "Təqaüd qazandınız" yazılsın.

**JavaScript**

```
let imtahanBali = 620;
let kesir = false;
```

### Tapşırıq 18: Məntiqi Operator `||` (Ödəniş Metodu)

Əgər `kartlaOdenis` true-dursa **VƏ YA** `nagdOdenis` true-dursa konsola "Sifariş təsdiqləndi", hər ikisi false-dursa "Zəhmət olmasa ödəniş üsulu seçin" yazılsın.

**JavaScript**

```
let kartlaOdenis = false;
let nagdOdenis = true;
```

### Tapşırıq 19: Məntiqi Operator `!` (Admin Yoxlanışı)

`isAdmin` dəyəri yaradın. Şərt daxilində `!` (NOT) operatorundan istifadə edərək "Əgər admin DEYİLSƏ" konsola "Bu səhifəyə giriş qadağandır" yazdırın.

**JavaScript**

```
let isAdmin = false;
```

### Tapşırıq 20: Kompleks Şərt (Endirim Kampaniyası)

Əgər istifadəçinin `yas`-ı 60-dan böyükdürsə **VƏ YA** `kupon` kodu true-dursa konsola "Sizə 20% endirim tətbiq olundu", əks halda "Endirim yoxdur" yazılsın.

**JavaScript**

```
let userAge = 25;
let kupon = true;
```

## 🎯 YENİ TAPŞIRIQLAR (21 - 40)

### Tapşırıq 21: `if` və `else` (Tək və Cüt Ədədlər)

`%` (qalıq) operatorundan istifadə edərək ədədin cüt və ya tək olduğunu yoxlayın. Cütdürsə "Cüt ədəd", təkdirsə "Tək ədəd" yazdırın.

**JavaScript**

```
let eded = 14;
```

### Tapşırıq 22: `else if` (Ayın Fəsilləri)

`ay` dəyərinə görə fəsli tapın. "Dekabr", "Yanvar", "Fevral" isə -> "Qış", "Mart", "Aprel", "May" isə -> "Yaz" və s. yazılsın.

**JavaScript**

```
let ay = "Aprel";
```

### Tapşırıq 23: `switch` (Valyuta Çevirici)

switch-case istifadə edərək valyuta növünə görə mətn yazdırın: "USD" -> "Amerika Dolları", "EUR" -> "Avro", "AZN" -> "Azərbaycan Manatı". Default olaraq "Naməlum valyuta" yazılsın.

**JavaScript**

```
let valyuta = "EUR";
```

### Tapşırıq 24: Ternary Operator (Abunəlik Statusu)

Ternary operator ilə `isPremium` dəyərini yoxlayın. True-dursa "Reklamsız video", false-dursa "Reklamlı video" yazılsın.

**JavaScript**

```
let isPremium = true;
```

### Tapşırıq 25: Falsy Dəyər (Boş Massiv Yoxlanışı)

Boş string `""` falsy-dir. Bəs boş array `[]` və ya boş obyekt `{}` truthy-dir yoxsa falsy? Bir `if` şərti daxilində boş massivi yoxlayaraq konsola nə çıxdığını tapın.

### Tapşırıq 26: Müqayisə Operatorları (`<` və `>=`)

`mehsulSayi` yaradın. Əgər məhsul sayı 1-dən kiçikdirsə "Anbarda məhsul bitdi", 1 və ya daha çoxdursa "Sifariş verə bilərsiniz" yazdırın.

**JavaScript**

```
let mehsulSayi = 0;
```

### Tapşırıq 27: Məntiqi Operator `&&` (Parolun Uzunluğu)

İstifadəçinin parolu həm `"12345"`-ə bərabər olmalı, həm də parolun uzunluğu (`parol.length`) 4-dən böyük olmalıdır.

**JavaScript**

```
let parol = "12345";
```

### Tapşırıq 28: Məntiqi Operator `||` (Həftə sonu yoxlanışı)

Əgər `gun` dəyəri "Şənbə" **VƏ YA** "Bazar" isə konsola "İstirahət günü", əks halda "İş günü" yazılsın.

**JavaScript**

```
let gunAdi = "Şənbə";
```

### Tapşırıq 29: Məntiqi Operator `!` (Yüklənmə Statusu)

`isLoading = true` dəyəri yaradın. Şərt daxilində `!isLoading` (yəni yüklənmə bitibsə) yoxlayıb "Səhifə hazır", əks halda "Yüklənir..." yazdırın.

**JavaScript**

```
let isLoading = true;
```

### Tapşırıq 30: `else if` (Sürət Həddi Radiatoru)

`suret` dəyəri 60-dan kiçik və ya bərabərdirsə -> "Normal", 61 ilə 90 arasındadırsa -> "Sürətli", 90-dan böyükdürsə -> "Həddindən artıq sürətli (Cərimə)" yazılsın.

**JavaScript**

```
let suret = 85;
```

### Tapşırıq 31: `if` və `else` (Müsbət və Mənfi Ədədlər)

Əgər `reqem` 0-dan böyükdürsə "Müsbət ədəd", kiçikdirsə "Mənfi ədəd", tam 0-dırsa "Ədəd sıfırdır" yazdırın.

**JavaScript**

```
let reqem = -7;
```

### Tapşırıq 32: `switch` (Qiymətləndirmə Sistemi)

switch-case istifadə edərək `reytinq` dəyərini yoxlayın: 5 üçün "Əla", 4 üçün "Yaxşı", 3 üçün "Kafi". Default olaraq "Naməlum reytinq" yazılsın.

**JavaScript**

```
let reytinq = 5;
```

### Tapşırıq 33: Ternary Operator (Cins Seçimi)

`cins` dəyəri "K" isə "Kişi", "Q" isə "Qadın" sözünü ternary operator ilə tapıb konsola yazdırın.

**JavaScript**

```
let cins = "K";
```

### Tapşırıq 34: Falsy Dəyər (`null` yoxlanışı)

`let data = null;` təyin edin. `if (data)` şərtini yazaraq null-ın şərt daxilində necə davranacağını (truthy/falsy) yoxlayın.

### Tapşırıq 35: Kompleks Şərt (Tələbə Girişi)

Əgər istifadəçi həm tələbədirsə (`isStudent = true`), həm də `yas`-ı 26-dan kiçikdirsə konsola "Tələbə kartı aktivdir" yazılsın.

**JavaScript**

```
let isStudent = true;
let telebeYasi = 22;
```

### Tapşırıq 36: Müqayisə Operatoru (Bərabərlik)

`let ad1 = "Əli";` və `let ad2 = "əli";` yaradın. Onları `==` ilə müqayisə edin və JavaScript-in böyük/kiçik hərflərə qarşı həssaslığını yoxlayın.

### Tapşırıq 37: Məntiqi Operator `&&` (İkiqat Təsdiq)

İstifadəçinin həm `emailTəsdiq` dəyəri true olmalı, həm də `telefonTəsdiq` dəyəri true olmalıdır ki, konsola "Profil aktivləşdirildi" yazılsın.

**JavaScript**

```
let emailTesdiq = true;
let telefonTesdiq = false;
```

### Tapşırıq 38: `else if` (Çəki İndeksi)

`ceki` dəyəri 50-dən azdırsa -> "Çəki azdır", 50 ilə 80 arasındadırsa -> "Normal çəki", 80-dən çoxdursa -> "Artıq çəki" yazılsın.

**JavaScript**

```
let ceki = 75;
```

### Tapşırıq 39: `switch` (Əməliyyat Seçimi)

`operator` dəyərinə görə switch-case qurun: "+" isə -> "Toplama əməliyyatı", "-" isə -> "Çıxma əməliyyatı". Default -> "Səhv operator".

**JavaScript**

```
let operator = "+";
```

### Tapşırıq 40: İç-içə `if` (Nested Conditions)

Əgər `kartBlokda` false-dursa, daxildə bir dənə də `if` açın və `balans` 0-dan böyükdürsə "Pul çıxarıla bilər" yazdırın.

**JavaScript**

```
let kartBlokda = false;
let kartBalans = 100;
```
