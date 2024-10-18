import $ from 'jquery'; // Mengimpor jQuery
import AOS from 'aos'; // Mengimpor AOS
import 'aos/dist/aos.css'; // Mengimpor CSS AOS
import 'magnific-popup'; // Mengimpor Magnific Popup
import 'magnific-popup/dist/magnific-popup.css'; // Mengimpor CSS untuk Magnific Popup

// // Fungsi untuk menginisialisasi galeri
// function initGallery() {
//     const gallery = document.querySelector(".gallery"); // Perbaiki typo dari ".galery" menjadi ".gallery"
//     if (gallery) {
//         const imgs = gallery.querySelectorAll(".img-container");
//         imgs.forEach((img) => {
//             img.style.width = "100%";
//             img.style.display = "inline-block";
//         });
//     } else {
//         console.error("Gallery not found");
//     }
// }

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
    if (pageHome) {
        pageHome.style.display = "block"; // Tampilkan konten
        setTimeout(() => {
            pageHome.classList.add("show"); // Tambahkan kelas untuk animasi
        }, 0); // Delay kecil agar animasi terlihat
    } else {
        console.error("Page home not found");
    }
}

// Fungsi untuk menginisialisasi AOS
function initAOS() {
    AOS.init({});
}

// Fungsi untuk meng-copy teks ke clipboard
function copyToClipboard(elementId, message) {
    const textToCopy = document.getElementById(elementId);
    if (textToCopy) {
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy.textContent; // Set nilai input ke teks
        document.body.appendChild(tempInput); // Tambahkan input ke DOM

        // Pilih dan salin nilai input
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput); // Hapus input sementara

        // Tampilkan toast
        const toast = document.getElementById("toast");
        if (toast) {
            toast.textContent = message;
            toast.classList.add("show");

            // Hapus toast setelah beberapa detik
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000); // Tampilkan toast selama 4 detik
        } else {
            console.error("Toast element not found");
        }
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
}

// Event listener untuk membuka undangan
document.addEventListener("DOMContentLoaded", function () {
    const openInvitationButton = document.getElementById("open-invitation");
    if (openInvitationButton) {
        openInvitationButton.addEventListener("click", function () {
            showInvitationContent(); // Tampilkan konten
            document.getElementById("cover").classList.add("hide"); // Menggulung cover ke atas

            const invitationContent = document.getElementById("invitation-content");
            if (invitationContent && invitationContent.classList.contains("invitation")) {
                invitationContent.classList.remove("invitation");
            }

            // Set atribut AOS
            const pageHome = document.getElementById("page-home");
            const textOpening = document.getElementById("text-opening");
            const cardDate = document.getElementById("card-date");

            if (pageHome) {
                pageHome.setAttribute("data-aos", "zoom-in");
                pageHome.setAttribute("data-aos-duration", "1500");
            }

            if (textOpening) {
                textOpening.setAttribute("data-aos", "zoom-in");
                textOpening.setAttribute("data-aos-duration", "2000");
                textOpening.setAttribute("data-aos-delay", "200");
            }

            if (cardDate) {
                cardDate.setAttribute("data-aos", "zoom-in");
                cardDate.setAttribute("data-aos-duration", "2000");
                cardDate.setAttribute("data-aos-delay", "300");
            }

            // Refresh AOS untuk mendeteksi perubahan
            AOS.init();
        });
    } else {
        console.error("Open invitation button not found");
    }

    // Event listener untuk menyalin nomor rekening
    const copyButton = document.getElementById("copy-button");
    if (copyButton) {
        copyButton.addEventListener("click", function () {
            copyToClipboard("account-number", "Nomor Rekening Disalin");
        });
    } else {
        console.error("Copy button not found");
    }

    // Event listener untuk menyalin alamat
    const copyAddressButton = document.getElementById("copy-alamat");
    if (copyAddressButton) {
        copyAddressButton.addEventListener("click", function () {
            copyToClipboard("address", "Alamat Disalin");
        });
    } else {
        console.error("Copy address button not found");
    }

    // Inisialisasi galeri dan popup
    // initGallery(); // Inisialisasi galeri
    initMagnificPopup(); // Inisialisasi Magnific Popup
    initAOS(); // Inisialisasi AOS
});
