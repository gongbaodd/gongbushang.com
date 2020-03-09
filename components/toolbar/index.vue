<template>
  <v-app-bar flat class="transparent">
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Mutation } from "vuex-class";

@Component
class Toobar extends Vue {
  @Mutation("navigation/toggle") toggle;
}

export default Toobar;
</script>
