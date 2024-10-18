<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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
