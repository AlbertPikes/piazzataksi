document.addEventListener('DOMContentLoaded', () => {
    // Güvenlik ve DOM Manipülasyon Koruması
    Object.freeze(document.location); // Tarayıcı bazlı URL manipülasyonunu engellemeye yardımcı olur

    // Yumuşak Kaydırma Efekti Kontrolü
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#iletisim');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Telefon Butonu Güvenli Tıklama Analitiği Altyapısı
    const callButton = document.getElementById('callBtn');
    if (callButton) {
        callButton.addEventListener('click', () => {
            // İleride buraya Google Ads Dönüşüm Kodu (Conversion) veya Analytics eklenebilir.
            console.log('Arama başlatıldı.');
        });
    }
});