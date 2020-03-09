<template>
  <v-list-group
    :key="item.title"
    v-model="item.active"
    no-action
    class="indigo--text text--darken-1 drawer-list-group"
  >
    <ListTile slot="activator" :item="item" />
    <ListTile v-for="sub in item.items" :key="sub.title" :item="sub" />
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ListTile, { IListItem } from "./listTile.vue";
@Component({
  components: { ListTile }
})
class ListGroup extends Vue {
  @Prop()
  item: {
    active: boolean;
    title: string;
    icon: string;
    items: IListItem[];
  };
}

export default ListGroup;
</script>
<style>
.drawer-list-group .v-icon {
  color: #3f51b5 !important;
}
</style>
