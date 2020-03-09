<template>
  <v-list-item>
    <v-btn text block large rounded color="indigo darken-1s" :to="item.url">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title class="item-title">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-btn>
  </v-list-item>
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
