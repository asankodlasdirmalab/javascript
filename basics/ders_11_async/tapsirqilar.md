# Async JavaScript — Tapşırıqlar

## Tapşırıq 1

`setTimeout` istifadə edərək 3 saniyə sonra konsolda `"Salam JavaScipt"` yazılsın

---

## Tapşırıq 2

`getUser` adlı funksiya yaradın.

- Funksiya callback qəbul etsin
- 2 saniyə sonra callback işə düşsün
- Callback içərisində hər hansı bir söz göndərin
- Konsolda həmin məlumat görünsün

Nümunə nəticə:

```js
Javascript
```

---

## Tapşırıq 3

`getNumber` adlı Promise qaytaran funksiya yaradın

- 2 saniyə sonra `resolve(50)` qaytarsın
- `.then()` ilə nəticəni konsolda göstərin

Nümunə nəticə:

```js
50
```

---

## Tapşırıq 4

`getData` adlı Promise yaradın.

- Əgər `true` olarsa `resolve("Məlumat tapıldı")`
- Əks halda `reject("Xəta baş verdi")`

`.then()` və `.catch()` istifadə edin.

---

## Tapşırıq 5

`getUser` adlı Promise qaytaran funksiya yaradın

- 2 saniyə sonra istifadəçi adı qaytarsın

Sonra `async/await` istifadə edərək nəticəni konsolda göstərin.

Nümunə nəticə:

```js
İstifadəçi: Ali
```

---

## Tapşırıq 6

`getProducts` adlı async funksiya yaradın.

- Promise istifadə edin
- 2 saniyə sonra məhsullar array qaytarsın

Nəticəni konsolda göstərin.

Nümunə:

```js
["Telefon", "Notebook", "Mouse"]
```

---

## Tapşırıq 7

`try/catch` istifadə edin.

- Promise reject etsin
- Xətanı catch içərisində konsola yazdırın

Nümunə nəticə:

```js
Xəta baş verdi
```

---

## Tapşırıq 8

`fetch` istifadə edərək aşağıdakı linkdən istifadəçiləri alın:

```txt
https://jsonplaceholder.typicode.com/users
```

Bütün istifadəçiləri konsolda göstərin.

---

## Tapşırıq 9

`fetch` istifadə edərək postları alın:

```txt
https://jsonplaceholder.typicode.com/posts
```

Yalnız ilk 5 postun `title` hissəsini konsolda göstərin.

---

## Tapşırıq 10

`fetch` istifadə edərək istifadəçiləri alın.

- Yalnız email hissələrini yeni array-a yığın
- Yeni array-ı konsolda göstərin

Nümunə nəticə:

```js
[
  "test@gmail.com",
  "hello@gmail.com"
]
```
