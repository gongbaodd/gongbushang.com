<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MeCard from "../components/me_card/index.vue";
import Links from "../components/links/index.vue";
import cando from "../consts/cando";

@Component({
  components: {
    MeCard,
    Links,
  },
})
class IndexPage extends Vue {
  doTitle = "技能树";
  doItems = cando;
}

export default IndexPage;
</script>

<template>
  <v-container fluid>
    <MeCard />
    <Links />
    <v-container grid-list-xl>
      <v-card>
        <v-card-title>
          {{ doTitle }}
        </v-card-title>
        <v-card-text class="indigo--text cando">
          <span v-for="doItem in doItems" :key="doItem.title">
            <img :src="doItem.img" style="with: 1em; height: 1em;" />
            {{ doItem.title }}
          </span>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
.cando {
  font-size: 1.2em;
  line-height: 2em;
}
.cando span {
  display: inline-block;
  margin-left: 1em;
}
</style>
