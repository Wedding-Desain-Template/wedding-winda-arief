<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Cover from './components/Cover.vue';
import Opening from './components/Opening.vue';

export default {
  name: 'App',
  components:{
    Cover,
    Opening,

  }
}
</script>
