function bukaUndangan() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("acara").classList.remove("hidden");
}
// 1. Inisialisasi Animasi AOS
AOS.init({
    duration: 1200,
    once: true
});

// 2. Kontrol Musik dan Cover
const music = document.getElementById('weddingMusic');
const musicControl = document.getElementById('music-control');

function startInvitation() {
    // Hilangkan cover ke atas
    document.getElementById('cover').classList.add('open');
    
    // Izinkan halaman di-scroll
    document.body.style.overflow = 'auto';
    
    // Putar musik
    music.play().catch(error => {
        console.log("Autoplay dicegah oleh browser, musik akan menyala saat interaksi berikutnya.");
    });
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicControl.innerText = "🎵";
    } else {
        music.pause();
        musicControl.innerText = "🔇";
    }
}

// 3. Menangani Nama Tamu dari URL
// Contoh penggunaan: index.html?to=Budi+Santoso
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');
if (guestName) {
    document.getElementById('guest-name').innerText = guestName;
}

// 4. Kunci Scroll saat halaman pertama kali dimuat
window.onload = function() {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
};