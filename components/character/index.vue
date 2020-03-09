<template>
  <iframe
    class="scene"
    src="https://gl.gongbushang.com/html/welcome.html"
    scrolling="no"
  ></iframe>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
@Component
class Character extends Vue {
  mounted() {}
}

export default Character;
</script>
<style scoped>
.scene {
  width: 100%;
  border: none;
  background: none;
}
</style>
