<template>
    <iframe class="scene" src="/static/three"></iframe>
</template>
<script lang="ts">
// tslint:disable:all

import Vue from 'vue';
import Component from 'nuxt-class-component';
@Component
export default class Character extends Vue {
  mounted() {}
}
</script>
<style scoped>
.scene {
  width: 100%;
  border: none;
  background: none;
}
</style>


