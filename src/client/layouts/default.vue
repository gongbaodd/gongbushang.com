<template>
    <v-app class="blue-grey lighten-5">
        <Toobar />
        <Navigation />
        <v-content app>
            <v-layout column fill-height>
                <v-flex class="nuxt-content">
                    <nuxt />
                </v-flex>
                <Footer/>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Toobar from '../components/toolbar/index.vue';
import Navigation from '../components/navigation/index.vue';
import Footer from '../components/footer/index.vue';
export default Vue.extend({
  components: {
    Toobar,
    Navigation,
    Footer,
  },
});
</script>

<style scoped>
.nuxt-content {
  min-height: 100%;
  min-height: calc(100% - 64px);
}
</style>



