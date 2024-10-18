<template>
  <!-- Opening -->
  <div id="invitation-content" class="invitation">
    <div class="card-page mb-3" id="page-home">
      <div class="mempelai">
        <img class="flower-1" src="../assets/vectors/flower-1.png" alt="" />
        <img class="img-mempelai" src="../assets/img/foto-2.jpg" alt="" />
        <img class="flower-1-1" src="../assets/vectors/flower-1.png" alt="" />
      </div>

      <div id="text-opening">
        <p class="text-to mt-3">
          The Wedding Of <br /><span
            class="nama-mempelai mt-5"
            style="font-size: 2.2em !important"
            >Putri & Putra</span
          >
          <br />26 Desember 2024
        </p>
      </div>
      <div class="card-date mt-1" id="card-date">
        <div>
          <div class="box-date hari">0</div>
          <p class="box-text">Hari</p>
        </div>
        <div>
          <div class="box-date hari">0</div>
          <p class="box-text">Jam</p>
        </div>
        <div>
          <div class="box-date hari">0</div>
          <p class="box-text">Menit</p>
        </div>
        <div>
          <div class="box-date hari">0</div>
          <p class="box-text">Detik</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Opening -->

  <!-- Surat -->
  <div class="card-page mb-3" data-aos="zoom-in" data-aos-duration="800">
    <img
      class="bismillah mt-2 mb-1"
      src="assets/vectors/bismillah.png"
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
  <div class="card-page mb-3" data-aos="zoom-in" data-aos-duration="1500">
    <p
      class="salam mt-1"
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
        ><img src="/assets/img/foto-6.jpg" alt=""
      /></a>
      <h3 class="nickname">Putri</h3>
    </div>
    <h2
      class="nama-mempelai-2 mb-2 mt-3"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      Nama Mempelai Wanita
    </h2>
    <h6
      class="text-to mb-4"
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
      class="cincin"
      src="/assets/vectors/cincin.png"
      alt=""
    />
    <h2
      class="nama-mempelai-2 mt-4 mb-2"
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
        ><img src="/assets/img/foto-5.jpg" alt=""
      /></a>
      <h2 class="nickname">Putra</h2>
    </div>
  </div>
  <!-- End Pengantin -->
</template>

<script>
export default {
  name: "OpeningInvitation",
};
</script>