<template>
    <div id="app" class="main-container">
      <div class="card-container">
        <CoverInvitation />
        <OpeningInvitation />
      </div>
    </div>
</template>

<script>
import CoverInvitation from "./components/Cover.vue";
import OpeningInvitation from "./components/Opening.vue";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
