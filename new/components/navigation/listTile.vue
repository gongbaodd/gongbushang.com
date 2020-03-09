<template>
  <v-list-tile>
    <v-btn flat block large round color="indigo darken-1s" :to="item.url">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title class="item-title">
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-btn>
  </v-list-tile>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
export interface IListItem {
  icon: string;
  title: string;
  url: string;
}
@Component
class ListTile extends Vue {
  @Prop() item: IListItem;
}

export default ListTile;
</script>
<style scoped>
.item-title {
  letter-spacing: 4px;
  font-size: large;
}
</style>
