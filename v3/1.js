
        document.addEventListener('DOMContentLoaded', function() {
            const popupOverlay = document.getElementById('popup-overlay');
            const closeButton = document.getElementById('close-popup');

            /**
             * 1. Fungsi untuk menampilkan pop-up dengan penundaan
             */
            setTimeout(function() {
                // Tampilkan overlay (display: flex)
                popupOverlay.style.display = 'flex';
                
                // Beri jeda kecil sebelum menambahkan kelas 'active'
                // untuk memastikan browser siap menjalankan transisi CSS
                setTimeout(function() {
                    popupOverlay.classList.add('active');
                }, 50);
                
            }, 2500); // **2500 milidetik = 2.5 detik** sebelum pop-up muncul

            /**
             * 2. Logika untuk menutup pop-up ketika tombol diklik
             */
            closeButton.addEventListener('click', function() {
                // Hapus kelas 'active' untuk memicu animasi keluar (jika ada, 
                // di sini akan memudar/zoom kembali)
                popupOverlay.classList.remove('active');
                
                // Sembunyikan pop-up sepenuhnya setelah durasi transisi CSS (0.5 detik)
                setTimeout(function() {
                     popupOverlay.style.display = 'none';
                }, 500); 
            });
        });