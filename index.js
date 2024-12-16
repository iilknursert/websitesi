document.addEventListener('DOMContentLoaded', function() {
    var index = 1; // Kutucukların başlangıç indexi 1 olarak belirlenmiş
    var kutucuklar = document.querySelectorAll(".haber-kutucuk"); // Tüm haber kutucuklarını seç

    function gosterHaber(index) {
        // Geçersiz indeks kontrolü
        if (index < 0 || index >= kutucuklar.length) {
            console.error("Geçersiz indeks: " + index);
            return;
        }

        // Tüm kutucukları gizle
        for (var i = 0; i < kutucuklar.length; i++) {
            kutucuklar[i].style.display = "none";
        }
        // Belirtilen index'teki kutucuğu göster
        kutucuklar[index].style.display = "flex";
    }

    // Sayfa yüklendiğinde ilk kutucuğu göster
    gosterHaber(index);

    // Önceki butonuna tıklanınca çalışacak fonksiyon
    document.getElementById("onceki").addEventListener("click", function () {
        index--; // Index'i azalt
        if (index < 0) {
            index = kutucuklar.length - 1; // Index sıfırdan küçükse en sonuncu kutucuğa geç
        }
        gosterHaber(index); // Yeni index'teki kutucuğu göster
    });

    // Sonraki butonuna tıklanınca çalışacak fonksiyon
    document.getElementById("sonraki").addEventListener("click", function () {
        index++; // Index'i artır
        if (index >= kutucuklar.length) {
            index = 0; // Index son kutucuğa ulaştıysa ilk kutucuğa geç
        }
        gosterHaber(index); // Yeni index'teki kutucuğu göster
    });

    // Aktif haber kutucuğunun başlangıç indeksi
    var aktifIndex = 1; // Başlangıçta ortadaki kutucuk aktif

    // Aktif haber kutucuğunu güncelleyen fonksiyon
    function guncelleAktifKutucuk(aktifIndex) {
        // Geçersiz aktif indeks kontrolü
        if (aktifIndex < 0 || aktifIndex >= kutucuklar.length) {
            console.error("Geçersiz aktif indeks: " + aktifIndex);
            return;
        }

        // Tüm kutucuklardan "active" sınıfını kaldır
        kutucuklar.forEach(function(kutucuk) {
            kutucuk.classList.remove("active");
        });

        // Yeni aktif kutucuğa "active" sınıfını ekle
        kutucuklar[aktifIndex].classList.add("active");
    }

    // Başlangıçta aktif kutucuğu güncelle
    guncelleAktifKutucuk(aktifIndex);
});
