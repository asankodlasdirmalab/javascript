# **Dərs 6: JavaScript Arrays - Tapşırıqlar**

### Tapşırıq 1

3 rəngdən ibarət `renkler` adlı bir array yaradın. konsolda birinci və ikinci elementini çıxarın.

#### Tapşırıq 2

Aşağıda verilmiş `id_list` massivinin daxilində neçə element olduğunu tapını. Daha sonra sonuncu elementini göstərin

```
const id_list = [1024, 2048, 4096, 8192, 16384];
```

### Tapşırıq 3

Eyni `id_list` sonuncu və sondan ikinci elementini modern `.at()` metodundan (neqativ indeksləmə) istifadə edərək tapın

### Tapşırıq 4

Aşağıda tələbələrin adları və imtahan ballarından ibarət iç-içə array verilib.

1. İkinci sətiri (yəni `["Emin", 85]`) konsolda göstərin
2. Leylanın topladığı balı (yəni `90` rəqəmini) indekslərlə  tapın və konsola göstərin.

```
const telebe_ballari = [
    ["Aysel", 95], // indeks 0
    ["Emin", 85],  // indeks 1
    ["Leyla", 90]  // indeks 2
];
```

### Tapşırıq 5

Verilmiş `lokasiya` arrayındaki elementləri (Enlik və Uzunluq koordinatlarını) **Array Destructuring** metodundan istifadə edərək `enlik` və `uzunluq` tapın

```
const lokasiya = [40.4093, 49.8671];
```

### Tapşırıq 6

 `mehsul` arrayındakı məhsulun adı, qiyməti və anbarda olub-olmaması (`true`/`false`) qeyd edilib. Destructuring zamanı yalnız `ad` və `anbarda` dəyişənlərini yaradın

```
const mehsul = ["Laptop", 1500, true];
```
