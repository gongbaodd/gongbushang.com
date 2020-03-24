<script lang="ts">
import Vue from "vue";
import Toobar from "../components/toolbar/index.vue";
import Footer from "../components/footer/index.vue";
import Github from "../components/Github.vue";
export default Vue.extend({
  components: {
    Toobar,
    Footer,
    Github,
  },
});
</script>

<template>
  <v-app class="blue-grey lighten-5">
    <Github />
    <Toobar />
    <v-content app>
      <v-layout column fill-height>
        <v-flex class="nuxt-content">
          <nuxt />
        </v-flex>
        <Footer />
      </v-layout>
    </v-content>
  </v-app>
</template>

<style scoped>
.nuxt-content {
  min-height: 100%;
  min-height: calc(100% - 224px);
}
</style>
