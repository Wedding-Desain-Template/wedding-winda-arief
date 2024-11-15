<template>
  <div id="app">
    <header>
      <h1>Selamat Datang di Undangan Kami</h1>
    </header>
    <Invitation />
    <RSVP />
    <Gallery />
  </div>
</template>

<script>
import CoverInvitation from './components/Cover.vue';
import OpeningInvitation from './components/Opening.vue';

export default {
  name: 'App',
  components:{
    CoverInvitation,
    OpeningInvitation,
  }
}
</script>
