<template>
  <!-- Opening -->
  <div id="invitation-content" class="invitation">
    <div class="card-page p-5" id="page-home">
      <img class="hero-top" src="../assets/vectors/hero-top.png" alt="" />
      <img class="flower-top" src="../assets/vectors/flower-top.png" alt="" />
      <div id="text-opening">
        <p class="text-to">
          The Wedding Of <br /><span
            class="nama-mempelai mt-5"
            style="font-size: 2.2em !important; color: #cabc65 !important"
            >Putri & Putra</span
          >
          <br />26 Desember 2024
        </p>
      </div>
      <img class="img-mempelai" src="/img/foto-6.jpg" alt="" />

      <div class="card-date mt-1 mb-4" id="card-date">
        <div>
          <div class="box-date">{{ countdown.hari }}</div>
          <p class="box-text">Hari</p>
        </div>
        <div>
          <div class="box-date">{{ countdown.jam }}</div>
          <p class="box-text">Jam</p>
        </div>
        <div>
          <div class="box-date">{{ countdown.menit }}</div>
          <p class="box-text">Menit</p>
        </div>
        <div>
          <div class="box-date">{{ countdown.detik }}</div>
          <p class="box-text">Detik</p>
        </div>
      </div>

      <img class="hero-bottom" src="../assets/vectors/hero-bottom.png" alt="" />
      <img
        class="flower-bottom"
        src="../assets/vectors/flower-bottom.png"
        alt=""
      />
    </div>
  </div>
  <!-- End Opening -->

  <!-- Surat -->
  <div class="card-page-ayat p-3" data-aos="zoom-in" data-aos-duration="800">
    <img
      class="bismillah mt-4 mb-1"
      src="../assets/vectors/bismillah.png"
      alt=""
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="200"
    />

    <p
      class="text-ayat mt-4"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
      لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
      اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
    </p>
    <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
      <span class="arti-ayat">
        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
        pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
        tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        <br />
        <br />
        <b>(Q.S Ar-rum Ayat 21)</b>
      </span>
    </p>
  </div>
  <!-- End Surat -->

  <!-- Pengantin -->
  <div class="card-page p-3" data-aos="zoom-in" data-aos-duration="1500">
    <img class="hero-top" src="../assets/vectors/hero-top.png" alt="" />
    <img class="jurai-kiri" src="../assets/vectors/jurai-kiri.png" alt="" />
    <img class="jurai-kanan" src="../assets/vectors/jurai-kanan.png" alt="" />
    <img class="burung" src="../assets/vectors/burung.png" alt="" />

    <div class="mb-5">
      <p
        class="salam mt-3"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        Assalamu'alaikum WR WB
      </p>
      <p
        class="text-home"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1500"
      >
        Dengan rahmat Allah SWT tanpa mengurangi rasa hormat , kami bermaksud
        mengundang Bapak\Ibu Saudara\i untuk menghadiri hari pernikahan kami
      </p>
      <div
        class="bride m-3"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <a href="/assets/img/foto-6.jpg" class="image-popup" title="Picture"
          ><img src="/img/foto-6.jpg" alt=""
        /></a>
      </div>
      <h3 class="nickname mt-3">Putri</h3>

      <h2
        class="nama-mempelai-2 mb-2 mt-2"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Nama Mempelai Wanita
      </h2>
      <h6
        class="text-to mb-5"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        Putri dari Bapak Puteri & <br />Ibu Putri
      </h6>
      <img
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1500"
        class="cincin mt-2 mb-4"
        src="../assets/vectors/cincin.png"
        alt=""
      />
      <h2 class="nickname" style="margin-top: 20px !important">Putra</h2>
      <h2
        class="nama-mempelai-2 mt-2 mb-2"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        Nama Mempelai Pria
      </h2>

      <h6
        class="text-to mb-2"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        Putra dari Bapak Putra & <br />Ibu Putra
      </h6>
      <div
        class="bride m-4"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <a href="/assets/img/foto-5.jpg" class="image-popup" title="Picture"
          ><img src="/img/foto-5.jpg" alt=""
        /></a>
      </div>
    </div>
    <img class="hero-bottom" src="../assets/vectors/hero-bottom.png" alt="" />
  </div>
  <!-- End Pengantin -->

  <!-- Date -->
  <div class="card-page-ayat p-3" data-aos="zoom-in" data-aos-duration="1500">
    <img class="flower-top" src="../assets/vectors/flower-top.png" alt="" />
    <div
      class="title-box"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      <p
        class="text-title-2"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        The Big Day
      </p>
      <img
        class="flower-right"
        src="../assets/vectors/flower-right.png"
        alt=""
      />
    </div>

    <div
      class="card-the-date mt-4"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <div class="border-card-date">
        <div
          class="akad"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h1 class="title-akad">Akad Nikah</h1>
          <h6
            style="
              font-weight: bold;
              letter-spacing: 1px;
              text-transform: uppercase;
            "
          >
            SAbTU
          </h6>
          <div class="separator-horizontal"></div>

          <div class="hari-tanggal">
            <h6 class="tanggal">
              <span style="font-size: 2em">28</span> <br />Desember <br />2024
            </h6>
            <div class="separator"></div>
            <h6 class="jam">
              08:00 WIB <br />
              s.d <br />
              10:00 WIB
            </h6>
          </div>

          <div class="separator-horizontal"></div>
          <h6 style="font-size: 0.8em !important">
            Rumah Mempelai Pria Jl. Raya Kuranji No. 45 Korong Gadang
          </h6>
          <div class="btn-box">
            <button class="btn open-maps">
              <i class="fas fa-map-marker-alt me-2"></i>Lihat Maps
            </button>
          </div>
        </div>
        <img
          class="art-date-top"
          src="../assets/vectors/art-date-top.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="card-the-date-2 mt-4"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <div class="border-card-date-2">
        <img
          class="art-date-bottom"
          src="../assets/vectors/art-date-bottom.png"
          alt=""
        />

        <div
          class="akad"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h1 class="title-akad" style="margin-top: 20px !important">
            Resepsi
          </h1>
          <h6
            style="
              font-weight: bold;
              letter-spacing: 1px;
              text-transform: uppercase;
            "
          >
            SAbTU
          </h6>
          <div class="separator-horizontal"></div>

          <div class="hari-tanggal">
            <h6 class="tanggal">
              <span style="font-size: 2em">28</span> <br />Desember <br />2024
            </h6>
            <div class="separator"></div>
            <h6 class="jam">
              08:00 WIB <br />
              s.d <br />
              10:00 WIB
            </h6>
          </div>

          <div class="separator-horizontal"></div>
          <h6 style="font-size: 0.8em !important">
            Rumah Mempelai Pria Jl. Raya Kuranji No. 45 Korong Gadang
          </h6>
          <div class="btn-box">
            <button class="btn open-maps">
              <i class="fas fa-map-marker-alt me-2"></i>Lihat Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Date -->

  <!-- Story -->
  <div class="card-page p-2" data-aos="zoom-in" data-aos-duration="1500">
    <img class="hero-top" src="../assets/vectors/hero-top.png" alt="" />
    <img class="flower-top" src="../assets/vectors/flower-top.png" alt="" />

    <div class="story-box">
      <div
        class="title-box mb-3"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <p class="text-title">Story of Us</p>
      </div>

      <div
        class="card-story p-2 mb-3"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <h1 class="title-story">
          <i class="fa fa-heart me-2" style="font-size: 19px"></i>Pertemuan
          Pertama
        </h1>
        <hr style="color: aliceblue" />
        <p class="text-to" style="color: white !important; text-align: justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio et ut qui omnis, neque culpa ab magnam id cumque minus
          accusamus laudantium magni. Quibusdam alias dolores expedita impedit
          autem.
        </p>
      </div>
      <div
        class="card-story p-2 mb-3"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <h1 class="title-story-2">
          Komitmen<i class="fa fa-heart mx-2" style="font-size: 19px"></i>
        </h1>
        <hr style="color: aliceblue" />
        <p class="text-to" style="color: white !important; text-align: justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio et ut qui omnis, neque culpa ab magnam id cumque minus
          accusamus laudantium magni. Quibusdam alias dolores expedita impedit
          autem.
        </p>
      </div>
      <div
        class="card-story p-2"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <h1 class="title-story">
          <i class="fa fa-heart me-2" style="font-size: 17px"></i>Tunangan
        </h1>
        <hr style="color: aliceblue" />
        <p class="text-to" style="color: white !important; text-align: justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio et ut qui omnis, neque culpa ab magnam id cumque minus
          accusamus laudantium magni. Quibusdam alias dolores expedita impedit
          autem.
        </p>
      </div>
    </div>
    <img class="hero-bottom" src="../assets/vectors/hero-bottom.png" alt="" />
  </div>
  <!-- End Story -->

  <!-- Galery -->
  <div class="card-page-ayat p-3" data-aos="zoom-in" data-aos-duration="1500">
    <img
      src="../assets/vectors/flower-right.png"
      class="flower-right-1"
      alt=""
    />
    <div
      class="title-box"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <p class="text-title-2">Our Moments</p>
    </div>
    <div class="galery px-3 pt-2 pb-3">
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-2.jpg" class="image-popup" title="Foto 2">
          <img class="img-galery" src="/img/foto-2.jpg" alt="Foto 2" />
        </a>
      </div>
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-7.jpg" class="image-popup" title="Foto 7">
          <img class="img-galery" src="/img/foto-7.jpg" alt="Foto 7" />
        </a>
      </div>
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-1.jpg" class="image-popup" title="Foto 1">
          <img class="img-galery" src="/img/foto-1.jpg" alt="Foto 1" />
        </a>
      </div>
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-3.jpg" class="image-popup" title="Foto 3">
          <img class="img-galery" src="/img/foto-3.jpg" alt="Foto 3" />
        </a>
      </div>
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-4.jpg" class="image-popup" title="Foto 4">
          <img class="img-galery" src="/img/foto-4.jpg" alt="Foto 4" />
        </a>
      </div>
      <div
        class="img-container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <a href="/img/foto-2.jpg" class="image-popup" title="Foto 5">
          <img class="img-galery" src="/img/foto-2.jpg" alt="Foto 5" />
        </a>
      </div>
    </div>
  </div>
  <!-- End Galery -->

  <!-- Gift -->
  <div class="card-page-ayat p-3" data-aos="zoom-in" data-aos-duration="1500">
    <img
      src="../assets/vectors/flower-right.png"
      class="flower-right-1"
      alt=""
    />
    <div
      class="title-box"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      <p class="text-title-2">Wedding Gift</p>
    </div>
    <div
      class="mt-3 px-3"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <p class="text-to-1">
        Doa dan restu adalah hadiah terbaik bagi kami, tetapi jika Bapak\Ibu
        Saudara\i ingin mengirimkan kami hadiah sebagai tanda kasih, bisa
        melalui :
      </p>
    </div>
    <div id="toast" class="toast"></div>

    <!-- <button class="btn-gift btn">Klik Disini</button> -->
    <div class="wedding-gift px-3 pb-4" id="wedding-gift">
      <div class="amplop-digital">
        <p
          class="text-to-2 mt-3"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          Amplop Digital
        </p>
        <div
          class="atm-card mt-3"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <div class="card-title">
            <b><i class="fa fa-credit-card me-2"></i>ATM BNI</b>
          </div>
          <div class="card-details">
            <p><span id="account-number">{{ rekening }}</span></p>
            <b>a.n {{ pemilikRekening }}</b>
          </div>
          <div class="form-group d-flex justify-content-end mt-4">
            <button class="btn-salin" id="copy-rekening" @click="copyRekening">
              <i class="fa fa-copy me-2"></i>
              {{ isCopiedRekening ? "Rekening Disalin" : "Salin Rekening" }}
            </button>
          </div>
        </div>
      </div>
      <div class="hadiah">
        <p
          class="text-to-2 mt-4"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          Kirim Hadiah
        </p>
        <div
          class="atm-card mt-3"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <div class="card-title">
            <b><i class="fa fa-gift me-2"></i>HADIAH PERNIKAHAN</b>
          </div>
          <div class="card-details mt-2">
            <b>{{ pemilikHadiah }}</b>
            <p>
              <span id="account-number" style="font-size: 0.9em !important"
                >No HP : {{nohp}}</span
              >
            </p>
            <p>
              <span id="address" style="font-size: 0.9em !important"
                >{{alamat}}</span
              >
            </p>
          </div>
          <div class="form-group d-flex justify-content-end mt-4">
            <button class="btn-salin" id="copy-alamat" @click="copyAlamat">
              <i class="fa fa-copy me-2"></i>
              {{ isCopiedAlamat ? "Alamat Disalin" : "Salin Alamat" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Gift -->

  <!-- ThankYou -->
  <div class="card-page p-4" data-aos="zoom-in" data-aos-duration="1500">
    <h5
      class="nama-mempelai"
      style="font-size: 2.1em !important"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      Terima Kasih
    </h5>
    <p
      class="text-to mt-4"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      Menjadi sebuah kebahagiaan dan suatu hal berhaga bagi kami apabila
      Bapak\Ibu Saudara\i bisa hadir dalam hari bahagia kami. Terima kasih untuk
      semua doa baik untuk kami.
    </p>
    <div class="d-flex" style="gap: 18px">
      <div
        class="img-mempelai-4 mb-3"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <a href="/assets/img/foto-2.jpg" class="image-popup" title="Foto 3"
          ><img src="/img/foto-3.jpg" alt=""
        /></a>
      </div>
    </div>

    <p
      class="text-to mt-3"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      Kami Yang Berbahagia
    </p>
    <h5
      class="nama-mempelai"
      style="font-size: 2.5em !important"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      Putri & Putra
    </h5>
  </div>
  <!-- End ThankYou -->

  <!-- Footer -->
  <div class="card-footer" style="text-align: center">
    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
      <p class="text-to" style="color: white !important">
        Made With Love <br /><span
          class="nama-undangan"
          style="color: white !important"
          >Nama Undangan</span
        >
      </p>
      <i class="fab fa-instagram me-3"></i>
      <i class="fab fa-tiktok me-3"></i>
      <i class="fab fa-whatsapp"></i>
    </div>
  </div>
  <!-- End Footer -->
</template>
<script>
export default {
  name: "OpeningInvitation",
  data() {
    return {
      targetDate: new Date("2024-12-15T00:00:00").getTime(),
      countdown: {
        hari: 0,
        jam: 0,
        menit: 0,
        detik: 0,
      },
      interval: null,
      isModalOpen: false, 
      isCopiedRekening: false,
      isCopiedAlamat: false,
      rekening: "123-456-7890",
      pemilikRekening: "Winda ",
      alamat: "Jalan",
      pemilikHadiah: "Winda",
      nohp: "09090909"
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      if (distance <= 0) {
        clearInterval(this.interval);
        this.countdown = { hari: 0, jam: 0, menit: 0, detik: 0 };
        return;
      }

      this.countdown.hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdown.jam = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.countdown.menit = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.countdown.detik = Math.floor((distance % (1000 * 60)) / 1000);
    },
    // Membuka modal
    openModal() {
      this.isModalOpen = true;
    },
    // Menutup modal
    closeModal() {
      this.isModalOpen = false;
    },
    // Fungsi untuk menyalin rekening ke clipboard
    copyRekening() {
      const copyButton = document.getElementById("copy-rekening"); // Pastikan tombol ada
      if (!copyButton) {
        console.error("Copy button not found");
        return;
      }
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = this.rekening; // Ganti dengan rekening yang sesuai
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Mengubah status salinan berhasil
      this.isCopiedRekening = true;

      // Reset status salinan setelah 2 detik
      setTimeout(() => {
        this.isCopiedRekening = false;
      }, 2000);
    },
    copyAlamat() {
      const copyButton = document.getElementById("copy-alamat"); // Pastikan tombol ada
      if (!copyButton) {
        console.error("Copy alamat not found");
        return;
      }
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = this.alamat; // Ganti dengan rekening yang sesuai
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Mengubah status salinan berhasil
      this.isCopiedAlamat = true;

      // Reset status salinan setelah 2 detik
      setTimeout(() => {
        this.isCopiedAlamat = false;
      }, 2000);
    },
  },
  mounted() {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    // Bersihkan interval saat komponen di-unmount
    clearInterval(this.interval);
  },
};
</script>
