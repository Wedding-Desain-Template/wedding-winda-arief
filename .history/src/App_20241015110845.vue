<template>
    <div class="main-container">
      <div class="card-container">
        <CoverInvitation />
        <OpeningInvitation />
        <PageSurat/>
      </div>
    </div>
</template>

<script>
import CoverInvitation from "./components/Cover.vue";
import OpeningInvitation from "./components/Opening.vue";
import PageSurat from "./components/Opening.vue";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
    PageSurat,
    PagePengantin
  },
};
</script>
