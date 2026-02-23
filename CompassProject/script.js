// Daktilo efekti için metnimiz ve gerekli HTML elementleri
const text = "Kelimeler taranıyor...";
const textElement = document.getElementById('typewriter-text');
let index = 0;

// Ekranda sabit duran yazıyı temizliyoruz ki harf harf baştan yazalım
textElement.innerHTML = '';

// Daktilo fonksiyonumuz
function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Her harf arası 50 milisaniye bekle (ağırbaşlı bir hız)
    } else {
        // Kelimeler bittikten sonra 1 saniye (1000ms) bekle ve ekranı yavaşça söndür
        setTimeout(fadeOutPreloader, 1000); 
    }
}

// Karanlık ekranı usulca yok etme fonksiyonumuz
function fadeOutPreloader() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    // CSS'te yazdığımız 'transition' sayesinde bu işlem 1 saniyede pürüzsüzce olacak
    preloader.style.opacity = '0';
    
    // 1 saniye sonra karanlık ekranı tamamen ortadan kaldır ve asıl sahneyi aç
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Sayfa kaydırma özelliğini geri getir
    }, 1500); 
}

// Sayfa ilk açıldığında daktilo motorunu çalıştır
window.onload = () => {
    typeWriter();
};