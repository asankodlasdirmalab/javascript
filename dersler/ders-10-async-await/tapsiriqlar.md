

# Dərs 10: JavaScript async & await Tapşırıqlar

Tapşırıq 1

Ekranda `"Salam"` yazısını 3 saniyə gözlədikdən sonra göstərən `setTimeout` kodu yazın.

Tapşırıq 2

Gözləmə müddəti 2 saniyə olan `setTimeout` funksiyasını işə salın və daxilində ekranda `"Taymer bitdi"` yazısını göstərin.

Tapşırıq 3

Sinxron və asinxron kodun işləmə ardıcıllığını yoxlamaq üçün əvvəlcə ekranda `"A"` yazısını, sonra 1 saniyəlik `setTimeout` daxilində `"B"` yazısını, sonda isə sinxron olaraq `"C"` yazısını göstərin.

Tapşırıq 4

`asinxronYoxla` adlı adsız (anonymous) funksiyanı `setTimeout` daxilində 500 millisaniyə sonra işə salın və ekranda `"İşlədi"` yazısını göstərin.

Tapşırıq 5

Verilmiş `setTimeout` funksiyasının işləməsini dayandırmaq üçün `clearTimeout` metodundan istifadə edin.

**JavaScript**

```
const taymerId = setTimeout(() => {
  console.log("Bu yazı görünməməlidir");
}, 4000);
```

Tapşırıq 6

`melumatGətir` adlı `async` funksiya təyin edin və daxilində ekranda `"Məlumat yüklənir..."` yazısını göstərin.

Tapşırıq 7

`async` funksiyaların hər zaman Promise qaytardığını yoxlamaq üçün boş bir `async function test()` təyin edin, onu çağırın və qayıdan dəyəri ekranda göstərin.

Tapşırıq 8

`fetch` metodundan istifadə edərək aşağıdakı URL-ə sorğu göndərin və cavab (response) obyektini ekranda göstərin.

**JavaScript**

```
const url = "https://jsonplaceholder.typicode.com/posts/1";
```

Tapşırıq 9

Aşağıdakı URL-ə `fetch` vasitəsilə sorğu göndərin və gələn asinxron cavabı `await` istifadə edərək `cavab` adlı dəyişənə təyin edib ekranda göstərin.

**JavaScript**

```
const url = "https://jsonplaceholder.typicode.com/users";
```

Tapşırıq 10

`fetch` ilə gələn cavab obyektini oxunaqlı JSON formatına çevirmək üçün `.json()` metodunu `await` ilə tətbiq edin və nəticəni ekranda göstərin.

**JavaScript**

```
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
```

Tapşırıq 11

`istifadeciler` adlı `async` funksiya yaradın. Funksiya daxilində verilmiş URL-ə `fetch` ilə sorğu göndərin, JSON formatına çevirin və alınan array-i ekranda göstərin.

**JavaScript**

```
const apiURL = "https://jsonplaceholder.typicode.com/users";
```

Tapşırıq 12

`try-catch` strukturundan istifadə edərək, mövcud olmayan `oxunmayanDeyisir` adlı dəyişəni ekranda göstərməyə çalışın və baş verən xətanı `catch` blokunda ekranda göstərin.

Tapşırıq 13

Səhv URL-ə sorğu göndərildikdə baş verə biləcək şəbəkə xətalarını tutmaq üçün `fetch` kodunu `try-catch` bloku daxilinə alın və xətanı ekranda göstərin.

**JavaScript**

```
const sehvURL = "https://yanlis-api-unvani.com/data";
```

Tapşırıq 14

`async/await` və `try-catch` kombinasiyasından istifadə edərək verilmiş API ünvanından məlumat çəkin, xəta yaranarsa ekranda `"Məlumat tapılmadı"` yazısını göstərin.

**JavaScript**

```
const api = "https://jsonplaceholder.typicode.com/wrong-endpoint";
```

Tapşırıq 15

`try-catch` blokunun `finally` hissəsindən istifadə edərək xəta olub-olmamasından asılı olmayaraq hər iki halda ekranda `"Sorğu tamamlandı"` yazısını göstərin.

**JavaScript**

```
try {
  const data = JSON.parse("{yanlis-json}");
} catch (error) {
  console.log("Xəta tutuldu");
}
```

Tapşırıq 16

`postlariGoster` adlı `async` funksiya daxilində verilmiş linkdən datanı çəkin və array-in yalnız ilk elementini ekranda göstərin.

**JavaScript**

```
const url = "https://jsonplaceholder.typicode.com/posts";
```

Tapşırıq 17

`fetch` sorğusundan gələn məlumatın uğurlu olub-olmadığını response daxilindəki `ok` mülkiyyəti (property) ilə yoxlayın və nəticəni ekranda göstərin.

**JavaScript**

```
const res = await fetch("https://jsonplaceholder.typicode.com/cells");
```

Tapşırıq 18

Daxilində 3 saniyəlik asinxron fasilə yaradan və sadəcə ekranda `"Yükləndi"` yazısını göstərən arrow `async` funksiyası təyin edin.

Tapşırıq 19

Aşağıdakı asinxron kodda baş verən xətanı `catch (xeta)` bloku ilə tutun və ekranda xətanın mesajını (`xeta.message`) göstərin.

**JavaScript**

```
try {
  let netice = dəyişənYoxdur * 2;
} catch (xeta) {
  // bura yazın
}
```

Tapşırıq 20

Verilmiş `getData` funksiyasını çağırın və onun tamamlanmasını gözləmək üçün `await` açar sözündən istifadə edərək qayıdan nəticəni ekranda göstərin.

**JavaScript**

```
async function getData() {
  return "Data gəldi";
}
```

Tapşırıq 21

Ekranda növbə ilə 1 saniyə arayla `"Mərhələ 1"`, `"Mərhələ 2"` və `"Mərhələ 3"` yazılarının çıxması üçün iç-içə (nested) üç ədəd `setTimeout` yazın.

Tapşırıq 22

`mehsulTap` adlı `async` funksiya təyin edin. Funksiya daxilində `try` bloku içərisində `fetch` ilə məlumatı götürün, əgər status kodu 404 olarsa `catch` blokuna ötürülməsini təmin edin.

**JavaScript**

```
const url = "https://jsonplaceholder.typicode.com/products/9999";
```

Tapşırıq 23

Dəyəri JSON formatında olan mətni `JSON.parse()` edərkən xəta çıxmaması üçün `try-catch` daxilinə alın və ekranda düzgün obyekt halında göstərin.

**JavaScript**

```
const dataStr = '{"name": "Nicat", "age": 25}';
```

Tapşırıq 24

`fetch` sorğusundan qayıdan status kodunu (məsələn: 200, 404) response obyektinin `status` mülkiyyəti ilə tapın və ekranda göstərin.

**JavaScript**

```
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
```

Tapşırıq 25

`id` parametrini qəbul edən `getTodo` adlı `async` funksiya təyin edin və daxilində dinamik olaraq tick (backtick) istifadə edərək həmin id-yə uyğun fetch sorğusu icra edin.

**JavaScript**

```
// URL strukturu: `https://jsonplaceholder.typicode.com/todos/${id}`
```

Tapşırıq 26

`setTimeout` köməyi ilə ekranda hər hansı bir əməliyyat icra olunana qədər keçən müddətdə asinxron olaraq `"Yüklənir..."` animasiya mətnini göstərin.

Tapşırıq 27

Asinxron şəkildə eyni anda iki fərqli `fetch` sorğusu icra edin, hər iki `await` cavabını ayrı-ayrı dəyişənlərə mənimsədin və ekranda göstərin.

**JavaScript**

```
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/comments/1";
```

Tapşırıq 28

Xətanın növünü müəyyən etmək üçün `catch (e)` daxilində `e.name` mülkiyyətini ekranda göstərin.

**JavaScript**

```
try {
  JSON.parse("{yanlis}");
} catch (e) {
  // bura yazın
}
```

Tapşırıq 29

`async` funksiya daxilində `fetch` ilə bir istifadəçinin profil məlumatını gətirin və obyektin yalnız `username` dəyərini ekranda göstərin.

**JavaScript**

```
const link = "https://jsonplaceholder.typicode.com/users/1";
```

Tapşırıq 30

İşləməsi 5 saniyə təyin edilmiş asinxron taymer funksiyasını hələ 2 saniyə keçmişkən sıfırlayan `clearTimeout` kodunu yazın.

Tapşırıq 31

`try-catch` strukturundan istifadə edərək daxili massiv (array) elementi mövcud olmadıqda proqramın çökməsinin qarşısını alın və xətanı ekranda göstərin.

**JavaScript**

```
const datalar = null;
```

Tapşırıq 32

`fetch` ilə alınan obyekt tipli məlumatın içindəki `title` dəyərini tapın və string birləşdirmə üsulu ilə ekranda göstərin.

**JavaScript**

```
const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
```

Tapşırıq 33

Ekranda `"Sinxron 1"`, `"Sinxron 2"` yazın, lakin aralarında 0 (sıfır) saniyə təyin edilmiş bir `setTimeout` ilə `"Asinxron"` yazısını işə salıb konsoldakı yekun ardıcıllığı izləyin.

Tapşırıq 34

`havaMelumati` adlı asinxron funksiya qurun, daxilində `fetch` ilə datanı oxuyun və gələn nəticəni array metodu olan `.length` ilə yoxlayıb sayını ekranda göstərin.

**JavaScript**

```
const url = "https://jsonplaceholder.typicode.com/todos";
```

Tapşırıq 35

Boş `catch(err)` bloku yerinə, xəta baş verdikdə ekranda xəbərdarlıq məqsədilə `"Sistemdə texniki xəta baş verdi!"` cümləsini göstərən şərt yazın.

Tapşırıq 36

Bir `async` funksiya yaradın və içərisində başqa bir `async` funksiyanı `await` açar sözü ilə çağırıb nəticəsini ekranda göstərin.

Tapşırıq 37

`fetch` sorğusu zamanı şəbəkə bağlantısının kəsilməsi ehtimalına qarşı `try-catch` blokunda xətanın özünü bütöv şəkildə ekranda göstərin.

Tapşırıq 38

`setTimeout` funksiyasına arrow funksiyasını birbaşa arqument kimi ötürün və 1.5 saniyə sonra ekranda `"Salam, Tələbə"` yazısını göstərin.

Tapşırıq 39

Asinxron funksiyadan qayıdan obyekt daxilindəki `email` sahəsini (field) destrukturizasiya (destructuring) edərək ekranda göstərin.

**JavaScript**

```
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const istifadeci = await response.json();
```

Tapşırıq 40

`try` bloku daxilində uğurlu asinxron `fetch` sorğusu icra edildikdən dərhal sonra ekranda `"Məlumatlar uğurla gətirildi"` ismarıcını göstərin.
