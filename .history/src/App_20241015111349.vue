<template>
  <div class="main-container">
    <div class="card-container">

      <!-- Tampilkan CoverInvitation pertama kali -->
      <CoverInvitation v-if="showCover" @open-invitation="handleOpenInvitation" />

      <!-- Setelah tombol 'Buka Undangan' diklik, tampilkan komponen lainnya -->
      <OpeningInvitation v-if="showOpening" />
      <PageSurat v-if="showSurat" />
      <PagePengantin v-if="showPengantin" />
      
    </div>
  </div>
</template>

<script>
import CoverInvitation from "./components/Cover.vue";
import OpeningInvitation from "./components/Opening.vue";
import PageSurat from "./components/Surat.vue";
import PagePengantin from "./components/Pengantin.vue";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
    PageSurat,
    PagePengantin,
  },
  data() {
    return {
      showCover: true,         // Tampilkan cover pada awalnya
      showOpening: false,      // OpeningInvitation akan muncul setelah tombol diklik
      showSurat: false,        // PageSurat akan muncul setelah Opening
      showPengantin: false     // PagePengantin akan muncul terakhir
    };
  },
  methods: {
    handleOpenInvitation() {
      this.showCover = false;       // Sembunyikan cover
      this.showOpening = true;      // Tampilkan OpeningInvitation
      setTimeout(() => {
        this.showSurat = true;      // Tampilkan PageSurat setelah beberapa waktu
      }, 1000);                     // Misalnya, tampil setelah 1 detik
      setTimeout(() => {
        this.showPengantin = true;  // Tampilkan PagePengantin setelah beberapa waktu
      }, 2000);                     // Misalnya, tampil setelah 2 detik
    }
  }
};
