// --- DOM ELEMENTLƏRİ ---
const feedQutusu = document.getElementById('feed-qutusu');
const bildirisQutusu = document.getElementById('bildiris-qutusu');

// Yeni Paylaşım Modalı Elementləri
const paylasimModali = document.getElementById('paylasim-modali');
const openPaylasimBtn = document.getElementById('yeni-paylasim-btn');
const closePaylasimBtn = document.getElementById('close-paylasim');
const paylasBtn = document.getElementById('paylas-btn');

// Posta Baxış Modalı Elementləri
const postBaxisModali = document.getElementById('post-baxis-modali');
const closePostBaxisBtn = document.getElementById('close-post-baxis');
const baxisSekil = document.getElementById('baxis-sekil');
const baxisLike = document.getElementById('baxis-like');
const baxisDislike = document.getElementById('baxis-dislike');
const baxisMetn = document.getElementById('baxis-metn');


// --- 1. HAZIR PAYLAŞIMLAR ---
const hazirPostlar = [
    {
        url: "https://images.unsplash.com/photo-1788801489466-478ea54c62fd?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tesvir: "Təbiətin inanılmaz gözəlliyi! 🌲🏔️",
        likeSayi: 120,
        dislikeSayi: 2
    },
    {
        url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500",
        tesvir: "Mənim sevimli pişiyim 🐱",
        likeSayi: 85,
        dislikeSayi: 0
    }
];

function postYarat(url, tesvir, likeSayi = 0, dislikeSayi = 0) {
    const postHTML = `
        <div class="post-card">
            <img src="${url}" alt="Post Şəkli" class="post-sekil">
            <div class="post-actions">
                <button class="action-btn like-btn">❤️ <span class="like-count">${likeSayi}</span></button>
                <button class="action-btn dislike-btn">👎 <span class="dislike-count">${dislikeSayi}</span></button>
            </div>
            <div class="post-info">
                <p><strong>@istifadeci:</strong> <span class="post-tesviri">${tesvir}</span></p>
            </div>
        </div>
    `;
    feedQutusu.insertAdjacentHTML('afterbegin', postHTML);
}

hazirPostlar.forEach(post => postYarat(post.url, post.tesvir, post.likeSayi, post.dislikeSayi));


// --- 2. BİLDİRİŞ (TOAST) MƏNTİQİ ---
let bildirisTaymeri;
function bildirisGoster(mesaj) {
    bildirisQutusu.innerText = mesaj;
    bildirisQutusu.classList.add('show');
    clearTimeout(bildirisTaymeri);
    bildirisTaymeri = setTimeout(() => {
        bildirisQutusu.classList.remove('show');
    }, 3000);
}


// --- 3. MODALLARIN İDARƏSİ ---
openPaylasimBtn.addEventListener('click', () => paylasimModali.style.display = 'flex');
closePaylasimBtn.addEventListener('click', () => paylasimModali.style.display = 'none');
closePostBaxisBtn.addEventListener('click', () => postBaxisModali.style.display = 'none');

window.addEventListener('click', (e) => {
    if (e.target === paylasimModali) paylasimModali.style.display = 'none';
    if (e.target === postBaxisModali) postBaxisModali.style.display = 'none';
});


// --- 4. YENİ POST PAYLAŞMAQ ---
paylasBtn.addEventListener('click', () => {
    const url = document.getElementById('sekil-url').value;
    const tesvir = document.getElementById('sekil-tesviri').value;

    if (url === "") {
        bildirisGoster("Zəhmət olmasa şəkil URL-i daxil edin!");
        return;
    }

    postYarat(url, tesvir);
    paylasimModali.style.display = 'none';
    document.getElementById('sekil-url').value = '';
    document.getElementById('sekil-tesviri').value = '';
    bildirisGoster("Şəkil uğurla paylaşıldı! ✅");
});


// --- 5. TƏK KLİK (MODAL AÇMAQ) VƏ İKİQAT KLİK (LIKE) AYIRICISI ---
let klikTaymeri;

feedQutusu.addEventListener('click', (event) => {
    // 5.1 Like və Dislike düymələrinin idarəsi
    const likeBtn = event.target.closest('.like-btn');
    if (likeBtn) {
        const span = likeBtn.querySelector('.like-count');
        span.innerText = parseInt(span.innerText) + 1;
        bildirisGoster("Bəyəndiniz! ❤️");
        return; // Düyməyə basılıbsa, aşağıdakı kodları oxumasın
    }

    const dislikeBtn = event.target.closest('.dislike-btn');
    if (dislikeBtn) {
        const span = dislikeBtn.querySelector('.dislike-count');
        span.innerText = parseInt(span.innerText) + 1;
        return;
    }

    // 5.2 Şəklin üzərinə 1 dəfə klikləyəndə Modalı Açmaq
    if (event.target.classList.contains('post-sekil')) {
        
        // Dərhal açmırıq! 250 millisaniyə gözləyirik. 
        // Əgər bu müddətdə 2-ci klik gəlməsə, deməli sadəcə baxmaq istəyir.
        clearTimeout(klikTaymeri); 
        
        klikTaymeri = setTimeout(() => {
            const card = event.target.closest('.post-card');
            
            // Seçilən postun məlumatlarını HTML-dən oxuyuruq
            const imgUrl = event.target.src;
            const likeSayi = card.querySelector('.like-count').innerText;
            const dislikeSayi = card.querySelector('.dislike-count').innerText;
            const tesvirMetni = card.querySelector('.post-tesviri').innerText;

            // Məlumatları Baxış Modalına yazdırırıq
            baxisSekil.src = imgUrl;
            baxisLike.innerText = likeSayi;
            baxisDislike.innerText = dislikeSayi;
            baxisMetn.innerHTML = `<strong>@istifadeci:</strong> ${tesvirMetni}`;

            // Modalı ekranda göstəririk
            postBaxisModali.style.display = 'flex';
        }, 250); 
    }
});

// 5.3 Şəklin üzərinə 2 dəfə ard-arda kliklədikdə (Like Atmaq)
feedQutusu.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('post-sekil')) {
        // İki dəfə kliklədiyinə görə, Modalı açmağı LƏĞV EDİRİK!
        clearTimeout(klikTaymeri); 

        // Like rəqəmini artırırıq
        const card = event.target.closest('.post-card');
        const likeSpan = card.querySelector('.like-count');
        likeSpan.innerText = parseInt(likeSpan.innerText) + 1;
        
        bildirisGoster("Şəkli bəyəndiniz! ❤️");
    }
});