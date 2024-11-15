<template>
  <div class="card-cover mb-4" id="cover">
    <div class="content-cover" data-aos="" data-aos-duration="2500">
      <div class="hero-top-cover"></div>

      <div class="d-flex">
        <div class="left-cover"></div>
        <div class="right-cover"></div>
      </div>

      <div class="cover-text mb-3">
        <img
          class="kupu-kupu"
          data-aos="fade-left"
          data-aos-duration="2500"
          src="../assets/vectors/kupu-kupu.png"
          alt="Butterfly"
        />
        <p
          class="text-to mb-2 mt-4"
          data-aos="fade-down"
          data-aos-duration="2500"
          data-aos-delay="100"
        >
          Wedding Invitation
        </p>
        <h2
          class="nama-mempelai"
          style="font-size: 2em !important"
          data-aos="fade-down"
          data-aos-duration="2500"
          data-aos-delay="300"
        >
          Putri & Putra
        </h2>

        <div class="card-nama-tamu" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
          <h6
            class="text-to"
            data-aos="fade-down"
            data-aos-duration="2500"
            data-aos-delay="300"
          >
            Kepada Yth. <br />
            Bapak/Ibu Saudara/i
          </h6>
          <h4
            class="nama-tamu mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            {{ guestName }}
          </h4>
          <h6
            class="text-to"
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-delay="200"
          >
            Di Tempat
          </h6>
        </div>

        <button
          class="btn open-invitation"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="200"
          id="open-invitation"
        >
          <i class="fas fa-heart me-2"></i>Buka Undangan
        </button>
      </div>

      <div class="hero-bottom-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverInvitation",
  data() {
    return {
      guestName: "", // Untuk menyimpan nama tamu
    };
  },
  methods: {
    getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    },
  },
  mounted() {
    // Ambil parameter 'name' dari URL jika ada
    this.guestName = this.getQueryParam("name") || "Tamu Undangan";
  },
};
</script>