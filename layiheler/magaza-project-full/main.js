// Hissələri (Header/Footer) yükləmək üçün funksiya
function loadComponent(elementId, filePath) {
    const placeholder = document.getElementById(elementId);
    if (placeholder) {
        fetch(filePath)
            .then(response => response.text())
            .then(htmlData => {
                placeholder.innerHTML = htmlData;
            })
            .catch(error => console.error(`${filePath} yüklənərkən xəta baş verdi:`, error));
    }
}

// Header və Footer-i bütün səhifələrdə çağırırıq
loadComponent('header-placeholder', 'header.html');
loadComponent('footer-placeholder', 'footer.html');

// --- (Your existing FakeStore API logic goes below this) ---

// URL-dən məhsulun ID-sini almaq üçün funksiya (Multi-page məntiqi)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Əgər səhifədə 'məhsullar-qutusu' varsa, deməli Ana Səhifədəyik
const mehsullarQutusu = document.getElementById('məhsullar-qutusu');

if (mehsullarQutusu) {
    // Bütün məhsulları API-dən çəkirik
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(mehsul => {
                // Elementləri dinamik olaraq JS-də yaradırıq
                const kart = document.createElement('div');
                kart.className = 'product-card';

                const sekil = document.createElement('img');
                sekil.src = mehsul.image;
                sekil.alt = mehsul.title;

                const basliq = document.createElement('h3');
                basliq.innerText = mehsul.title;

                const qiymet = document.createElement('p');
                qiymet.innerText = `Qiymət: $${mehsul.price}`;

                const link = document.createElement('a');
                link.href = `product.html?id=${mehsul.id}`; // Dinamik URL
                link.innerText = 'Detallara bax';

                // Yaratdığımız elementləri karta əlavə edirik
                kart.appendChild(sekil);
                kart.appendChild(basliq);
                kart.appendChild(qiymet);
                kart.appendChild(link);

                // Kartı HTML-dəki ana qutuya əlavə edirik
                mehsullarQutusu.appendChild(kart);
            });
        })
        .catch(error => console.error('Xəta baş verdi:', error));
}

// Əgər səhifədə 'tək-məhsul-qutusu' varsa və ID mövcuddursa, deməli Məhsul Səhifəsindəyik
const tekMehsulQutusu = document.getElementById('tək-məhsul-qutusu');

if (tekMehsulQutusu && productId) {
    // Yalnız bir məhsulu API-dən çəkirik
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(mehsul => {
            const sekil = document.createElement('img');
            sekil.src = mehsul.image;
            
            const basliq = document.createElement('h2');
            basliq.innerText = mehsul.title;
            
            const tesvir = document.createElement('p');
            tesvir.innerText = mehsul.description;
            
            const qiymet = document.createElement('h3');
            qiymet.innerText = `Qiymət: $${mehsul.price}`;

            // Bütün məlumatları ekrana yazdırırıq
            tekMehsulQutusu.appendChild(sekil);
            tekMehsulQutusu.appendChild(basliq);
            tekMehsulQutusu.appendChild(tesvir);
            tekMehsulQutusu.appendChild(qiymet);
        })
        .catch(error => console.error('Xəta baş verdi:', error));
}