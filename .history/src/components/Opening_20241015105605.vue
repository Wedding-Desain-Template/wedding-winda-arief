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
</template>

<script>
export default {
  name: "OpeningInvitation",
};
</script>