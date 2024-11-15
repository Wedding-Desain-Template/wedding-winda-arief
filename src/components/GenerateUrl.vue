<template>
  <div class="generate-url">
    <p class="text-to mb-2 text-center mt-4">Wedding Invitation</p>
    <h2 class="nama-mempelai text-center" style="font-size: 2em !important">
      Winda & Arief
    </h2>
    <form @submit.prevent="generateUrl" class="form-group">
      <div>
        <input
          class="form-control"
          id="guestName"
          v-model="guestName"
          type="text"
          placeholder="Masukkan nama tamu"
          required
        />
      </div>
      <div class="btn-kirim-div">
        <button class="btn btn-kirim" type="submit">
          <i class="fa fa-heart mx-1"></i>Buat Link Undangan
        </button>
      </div>
    </form>
    <div v-if="generatedUrl" class="result">
      <p class="text-to text-center mt-3 text-center">Link Undangan Berhasil Dibuat</p>
      <div class="url-undangan text-center">
        <a :href="generatedUrl" target="_blank">{{ generatedUrl }}</a>
      </div>
      <div class="actions mt-3">
        <button class="btn btn-kirim mx-2" @click="copyToClipboard">
          <i class="fa fa-copy mx-1"></i> Copy Link
        </button>
        <button class="btn btn-kirim" @click="shareToWhatsApp">
          <i class="fab fa-whatsapp mx-1" style="font-size: 1.3em !important;"></i> Share via WhatsApp
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guestName: "", // Input nama tamu
      generatedUrl: "", // Hasil URL yang digenerate
    };
  },
  methods: {
    generateUrl() {
      // Ambil URL dasar dari browser saat ini
      const baseUrl = window.location.origin + "/"; // URL dasar aplikasi
      // Membentuk URL dengan parameter nama tamu
      this.generatedUrl = `${baseUrl}?name=${encodeURIComponent(
        this.guestName
      )}`;
    },
    copyToClipboard() {
      // Salin URL ke clipboard
      navigator.clipboard
        .writeText(this.generatedUrl)
        .then(() => {
          alert("Link berhasil disalin ke clipboard!");
        })
        .catch((err) => {
          alert("Gagal menyalin link: " + err);
        });
    },
    shareToWhatsApp() {
      // Bagikan URL ke WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        "Halo! Anda diundang, berikut tautannya: " + this.generatedUrl
      )}`;
      window.open(whatsappUrl, "_blank");
    },
  },
};
</script>

<style scoped>
.text-to {
  font-family: "Alice", sans-serif;
  font-size: 1.1em;
  color: #500d0b;
  letter-spacing: 0.3px;
}
.nama-mempelai {
  font-family: "Alice";
  letter-spacing: 1px;
  font-size: 1em !important;
  color: #500d0b !important;
}

.btn-kirim-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.url-undangan {
  box-shadow: 0 4px 8px rgba(80, 2, 2, 0.5);
  padding: 8px;
  border-radius: 8px;
}

.url-undangan a {
  color: #500d0b !important;
}

.generate-url {
  box-shadow: 0 4px 8px rgba(8, 8, 8, 0.5);
  padding: 50px;
}
.btn-kirim {
  background-color: #500d0b !important;
  color: whitesmoke !important;
  font-size: 0.8em !important;
  font-weight: bold !important;
  border-radius: 50px !important;
  letter-spacing: 1px;
  margin-top: 10px;
}

input::placeholder {
  color: #500d0b !important; /* Warna placeholder */
}
.form-control {
  margin-top: 25px;
  color: #500d0b !important;
  border: #500d0b solid 1px !important;
}
</style>
