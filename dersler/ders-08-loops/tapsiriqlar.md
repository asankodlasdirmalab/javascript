## JavaScript Dərs 8: Loops (`for`, `for...of`, `while`, `break`, `continue`)

### Tapşırıqlar

1. `for` ilə 1-dən 10-a qədər ədədləri hər biri ayrı sətirdə olmaqla göstərin (`document.write`).
2. `for` ilə 10-dan 1-ə qədər geri sayım göstərin.
3. Aşağıdakı array-i `for` (`let i = 0` ilə) istifadə edərək `<ul>` siyahısı kimi göstərin:

   js

   ```js
   let meyveler = ["Alma", "Armud", "Banan", "Nar", "Üzüm"];
   ```
4. Aşağıdakı array-i `for` ilə nömrələnmiş siyahı (`<ol>`) kimi göstərin:

   js

   ```js
   let filmler = ["Inception", "Interstellar", "Matrix", "Gladiator"];
   ```
5. Aşağıdakı array-i `for...of` ilə `<ul>` siyahısı kimi göstərin:

   js

   ```js
   let seherler = ["Bakı", "Gəncə", "Sumqayıt", "Şəki", "Lənkəran"];
   ```
6. Aşağıdakı array-i `for...of` ilə açılan menyu (`<select>` və `<option>`) kimi göstərin:

   js

   ```js
   let olkeler = ["Azərbaycan", "Türkiyə", "Gürcüstan", "İran"];
   ```
7. Aşağıdakı array-i `for...of` ilə cədvəlin bir sətrində (`<table>`, `<tr>`, `<td>`) hər gün ayrı xanada göstərin:

   js

   ```js
   let gunler = ["B.e", "Ç.a", "Çər", "C.a", "Cümə", "Şən", "Baz"];
   ```
8. `for` ilə 7-nin vurma cədvəlini göstərin: `7 x 1 = 7`, `7 x 2 = 14`, ...
9. `while` ilə 1-dən 5-ə qədər ədədləri göstərin.
10. Aşağıdakı array-i `while` ilə `<ul>` siyahısı kimi göstərin:

    js

    ```js
    let fenler = ["Riyaziyyat", "Fizika", "Kimya", "Biologiya", "Tarix"];
    ```
11. `while` ilə 2-dən 20-yə qədər cüt ədədləri göstərin.
12. Aşağıdakı array-i `for...of` ilə göstərin, amma ilk mənfi ədədi görən kimi dayandırın (`break`):

    js

    ```js
    let temperaturlar = [12, 18, 7, -3, 15, 20];
    ```
13. Aşağıdakı array-i `for...of` ilə `<ul>` siyahısı kimi göstərin, amma `"Bazar"` günü siyahıda olmasın (`continue`):

    js

    ```js
    let heftenGunleri = ["Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə", "Bazar"];
    ```
14. `for` ilə 1-dən 20-yə qədər ədədləri göstərin, amma `3`-ə bölünənləri göstərməyin (`continue`).
15. **Yekun tapşırıq:** Aşağıdakı iki array-i `for` ilə cədvəl kimi göstərin (hər sətirdə ad və qiymət):

    js

    ```js
    let mehsullar = ["Çörək", "Süd", "Pendir", "Yumurta"];
    let qiymetler = [0.8, 1.9, 7.5, 3.2];
    ```

### Suallar

* Dövr (loop) nədir və nə üçün lazımdır?
* `for` dövrünün üç hissəsi (`let i = 0; i < 5; i++`) nə edir?
* `i++` nə deməkdir?
* `for` ilə `for...of` arasında fərq nədir? Hansını nə vaxt seçərdiniz?
* Array-in uzunluğunu necə tapırıq və `for` dövründə niyə lazımdır?
* Array-də ilk elementin indeksi neçədir? Dövrdə `i` neçədən başlayır?
* `for (let i = 0; i < 5; i++)` dövrü neçə dəfə işləyir? `i <= 5` yazsaq nə dəyişər?
* `while` dövrü hansı halda işləməyə başlayır və nə vaxt dayanır?
* `while` dövründə `i++` yazmağı unutsaq nə baş verir?
* `for` ilə `while` arasında fərq nədir?
* `break` nə edir?
* `continue` nə edir?
* `break` ilə `continue` arasında fərq nədir?
