<template>
  <v-toolbar app flat class="transparent">
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
  </v-toolbar>
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
