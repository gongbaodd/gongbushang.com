<template>
  <v-container grid-list-xl>
    <Bigger
      v-for="item in items"
      :key="item._id"
      :img="item.img"
      :title="item.name"
      btn-text="去看看"
      :url="item.url"
    />
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Bigger from "../components/link_card/bigger.vue";

@Component({
  components: {
    Bigger
  }
  // apollo: {
  //   items: {
  //     query,
  //     variables: {
  //       category: 'gym',
  //     },
  //     update({ sortItem }) {
  //       return sortItem;
  //     },
  //     fetchPolicy: 'cache-and-network',
  //   },
  // },
})
class Gym extends Vue {}
export default Gym;
</script>
