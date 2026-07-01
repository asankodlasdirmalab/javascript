# [JavaScript Dərs 9 Array Methods](https://docs.google.com/presentation/d/1z9qJ_HsMSrS9UMT49xZGAerAcfdQC5Bv-nCOzjn1lI0/edit?slide=id.p#slide=id.p)

Mövzular

#### Element əlavə etmək və silmək:

* push() - Yeni element əlavə edir (sona)
* pop() - Element silir (sondan)
* unshift() - Yeni element əlavə edir (əvvələ)
* shift() - Element silir (əvvəldən)
* splice() - İstənilən indexdə silmə və ya əlavə etmə
* slice(start, end) - Kəsərək kopyasını çıxartmaq
* toSpliced(), toSorted(), toReversed() - Immutable versiyalar

#### Elementlərdə axtarış:

* indexOf(item) - Elementin indeksini qaytarır
* lastIndexOf(item) - Elementin eynsinin son indeksini qaytarır
* includes(item) - Elementin mövcudluğu yoxluyur: true / false
* find(callback) - Bir element tapmaq üçün
* findIndex(callback) - Bir elementin indeksini tapmaq üçün

#### Array üzərində dəyişiklik etmək (original array-a heçnə olmur):

* map(callback) - Elementləri dəyişdirərək qaytarmaq üçün
* filter(callback) - Elementləri filterliyərək qaytarmaq üçün
* reduce(callback, initialValue) - Elementləri fərqli məntiqlə saya bilmək üçün
* forEach(callback) - Elementlər üzərində proses aparmaq üçün

#### Sorting (çeşidləmək) və reversing (tərsinə çevirmək):

* sort() - Default formada çeşidləyir
* sort((a, b) => a - b) - Rəqəm arrayını artan şəkildə çeşidləyir
* sort((a, b) => b - a) - Rəqəm arrayını azalan şəkildə çeşidləyir
* reverse() - Array sırasını tərsinə çevirir

#### Digər lazımlı funksiyalar:

* concat(array2) - Bir neçə array birləşdirmək üçün
* join(separator) - Array-ı string-ə çevirir
* split(separator) - String-i array-ə çevirir
* flat(depth) - nested array-ı bir addım üzə çıxarır
* some(callback) - Boolean qaytarır əgər bəzi elementlər uyğundursa
* every(callback) - Boolean qaytarır əgər bütün elementlər uyğundursa
* fill(value, start, end) - Array-ı dəyərlə doldurur
* from() - Array-like obyektdən array yaradır
* of() - Elementlərdən array yaradır
