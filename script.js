// Ambil elemen tombol dan menu dari DOM
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');  // Pastikan ini adalah id atau sesuaikan jika menu menggunakan class

// Tambahkan event listener untuk tombol hamburger
menuToggle.addEventListener('click', () => {
    // Toggle kelas 'show' pada menu
    menu.classList.toggle('show');

    // Jika ingin menambahkan animasi ke tombol hamburger, bisa juga menambah toggle kelas di sini
    menuToggle.classList.toggle('active');
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Durasi per slide dalam ms

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); // Tampilkan slide pertama
    setInterval(nextSlide, slideInterval); // Ubah slide setiap 5 detik
});
