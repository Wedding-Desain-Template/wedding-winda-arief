// window.addEventListener("load", function () {
//     const gallery = document.querySelector(".galery");
//     const imgs = gallery.querySelectorAll(".img-container");

//     imgs.forEach((img) => {
//         img.style.width = "100%";
//         img.style.display = "inline-block";
//     });
// });

// $(document).ready(function () {
//     $(".image-popup").magnificPopup({
//         type: "image",
//         gallery: {
//             enabled: true,
//         },
//         titleSrc: "title",
//         mainClass: "mfp-fade",
//         closeBtnInside: true,
//         callbacks: {
//             open: function () {
//                 $("body").addClass("mfp-open");
//             },
//             close: function () {
//                 $("body").removeClass("mfp-open");
//             },
//         },
//     });
// });

// document
//     .getElementById("open-invitation")
//     .addEventListener("click", function () {
//         var pageHome = document.getElementById("page-home");
//         pageHome.style.display = "block"; // Tampilkan konten
//         setTimeout(function () {
//             pageHome.classList.add("show"); // Tambahkan kelas untuk animasi
//         }, 0); // Delay kecil agar animasi terlihat
//     });

// document.addEventListener("DOMContentLoaded", function () {
//     AOS.init({});
// });

// document
//     .getElementById("open-invitation")
//     .addEventListener("click", function () {
//         // Menggulung cover ke atas ketika tombol diklik
//         document.getElementById("cover").classList.add("hide");

//         // Menghapus class 'invitation' dari elemen jika ada
//         const invitationContent = document.getElementById("invitation-content");
//         if (invitationContent.classList.contains("invitation")) {
//             invitationContent.classList.remove("invitation");
//         }

//         // Menambahkan atribut AOS setelah tombol diklik
//         const pageHome = document.getElementById("page-home");
//         const textOpening = document.getElementById("text-opening");
//         const cardDate = document.getElementById("card-date");
//         pageHome.setAttribute("data-aos", "zoom-in");
//         pageHome.setAttribute("data-aos-duration", "1500");
//         textOpening.setAttribute("data-aos", "zoom-in");
//         textOpening.setAttribute("data-aos-duration", "2000");
//         textOpening.setAttribute("data-aos-delay", "200");
//         cardDate.setAttribute("data-aos", "zoom-in");
//         cardDate.setAttribute("data-aos-duration", "2000");
//         cardDate.setAttribute("data-aos-delay", "300");

//         // Refresh AOS untuk mendeteksi perubahan
//         AOS.init();
//     });
// document.getElementById("copy-button").addEventListener("click", function () {
//     const accountNumber = document.getElementById("account-number").textContent;

//     // Buat elemen input sementara
//     const tempInput = document.createElement("input");
//     tempInput.value = accountNumber; // Set nilai input ke nomor rekening
//     document.body.appendChild(tempInput); // Tambahkan input ke DOM

//     // Pilih dan salin nilai input
//     tempInput.select();
//     document.execCommand("copy");
//     document.body.removeChild(tempInput); // Hapus input sementara

//     // Tampilkan toast
//     const toast = document.getElementById("toast");
//     toast.textContent = "Nomor Rekening Disalin";
//     toast.classList.add("show");

//     // Hapus toast setelah beberapa detik
//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 4000); // Tampilkan toast selama 3 detik
// });
// document.getElementById("copy-alamat").addEventListener("click", function () {
//     const accountNumber = document.getElementById("address").textContent;

//     // Buat elemen input sementara
//     const tempInput = document.createElement("input");
//     tempInput.value = accountNumber; // Set nilai input ke nomor rekening
//     document.body.appendChild(tempInput); // Tambahkan input ke DOM

//     // Pilih dan salin nilai input
//     tempInput.select();
//     document.execCommand("copy");
//     document.body.removeChild(tempInput); // Hapus input sementara

//     // Tampilkan toast
//     const toast = document.getElementById("toast");
//     toast.textContent = "Alamat Disalin";
//     toast.classList.add("show");

//     // Hapus toast setelah beberapa detik
//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 4000); // Tampilkan toast selama 3 detik
// });
