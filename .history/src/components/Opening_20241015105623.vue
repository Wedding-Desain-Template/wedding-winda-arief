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
        <img class="bismillah mt-2 mb-1" src="assets/vectors/bismillah.png" alt="" data-aos="fade-up"
            data-aos-duration="2000" data-aos-delay="200">

        <p class="text-ayat mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ
            بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <span class="arti-ayat">
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari
                (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa
                cinta
                dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
                (kebesaran
                Allah) bagi kaum yang berpikir.
                <br>
                <br>
                <b>(Q.S Ar-rum Ayat 21)</b>
            </span>
        </p>
    </div>
    <!-- End Surat -->
</template>

<script>
export default {
  name: "OpeningInvitation",
};
</script>