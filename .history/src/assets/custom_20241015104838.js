import $ from 'jquery'; // Mengimpor jQuery
import AOS from 'aos'; // Mengimpor AOS
import 'aos/dist/aos.css'; // Mengimpor CSS AOS
import 'magnific-popup'; // Mengimpor Magnific Popup
import 'magnific-popup/dist/magnific-popup.css'; // Mengimpor CSS untuk Magnific Popup

// Fungsi untuk menginisialisasi galeri
function initGallery() {
    const gallery = document.querySelector(".gallery"); // Perbaiki typo dari ".galery" menjadi ".gallery"
    if (gallery) {
        const imgs = gallery.querySelectorAll(".img-container");
        imgs.forEach((img) => {
            img.style.width = "100%";
            img.style.display = "inline-block";
        });
    } else {
        console.error("Gallery not found");
    }
}

// Fungsi untuk menginisialisasi Magnific Popup
function initMagnificPopup() {
    $(".image-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
        titleSrc: "title",
        mainClass: "mfp-fade",
        closeBtnInside: true,
        callbacks: {
            open: function () {
                $("body").addClass("mfp-open");
            },
            close: function () {
                $("body").removeClass("mfp-open");
            },
        },
    });
}

// Fungsi untuk menampilkan konten undangan
function showInvitationContent() {
    const pageHome = document.getElementById("page-home");
    pageHome.style.display = "block"; // Tampilkan konten
    setTimeout(() => {
        pageHome.classList.add("show"); // Tambahkan kelas untuk animasi
    }, 0); // Delay kecil agar animasi terlihat
}

// Fungsi untuk menginisialisasi AOS
function initAOS() {
    AOS.init({});
}

// Fungsi untuk meng-copy teks ke clipboard
function copyToClipboard(elementId, message) {
    const textToCopy = document.getElementById(elementId).textContent;

    // Buat elemen input sementara
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy; // Set nilai input ke teks
    document.body.appendChild(tempInput); // Tambahkan input ke DOM

    // Pilih dan salin nilai input
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput); // Hapus input sementara

    // Tampilkan toast
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    // Hapus toast setelah beberapa detik
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000); // Tampilkan toast selama 4 detik
}

// Event listener untuk membuka undangan
document.getElementById("open-invitation").addEventListener("click", function () {
    showInvitationContent(); // Tampilkan konten
    // Menggulung cover ke atas ketika tombol diklik
    document.getElementById("cover").classList.add("hide");

    // Hapus class 'invitation' dari elemen jika ada
    const invitationContent = document.getElementById("invitation-content");
    if (invitationContent.classList.contains("invitation")) {
        invitationContent.classList.remove("invitation");
    }

    // Menambahkan atribut AOS setelah tombol diklik
    const pageHome = document.getElementById("page-home");
    const textOpening = document.getElementById("text-opening");
    const cardDate = document.getElementById("card-date");

    // Set atribut AOS
    pageHome.setAttribute("data-aos", "zoom-in");
    pageHome.setAttribute("data-aos-duration", "1500");
    textOpening.setAttribute("data-aos", "zoom-in");
    textOpening.setAttribute("data-aos-duration", "2000");
    textOpening.setAttribute("data-aos-delay", "200");
    cardDate.setAttribute("data-aos", "zoom-in");
    cardDate.setAttribute("data-aos-duration", "2000");
    cardDate.setAttribute("data-aos-delay", "300");

    // Refresh AOS untuk mendeteksi perubahan
    AOS.init();
});

// Event listener untuk menyalin nomor rekening
document.getElementById("copy-button").addEventListener("click", function () {
    copyToClipboard("account-number", "Nomor Rekening Disalin");
});

// Event listener untuk menyalin alamat
document.getElementById("copy-alamat").addEventListener("click", function () {
    copyToClipboard("address", "Alamat Disalin");
});

// Menambahkan event listener saat dokumen siap
window.addEventListener("load", function () {
    initGallery(); // Inisialisasi galeri
    initMagnificPopup(); // Inisialisasi Magnific Popup
    initAOS(); // Inisialisasi AOS
});
