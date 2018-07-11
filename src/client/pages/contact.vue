<template>
<v-container>
  <Active/>
  <MActive/>
</v-container>

</template>
<script lang="ts">
// tslint:disable:all
import Vue from 'vue';
import Component from 'vue-class-component';
import Active from '../components/contact/active.vue';
import MActive from '../components/contact/mactive.vue';
@Component({
  components: {
    Active,
    MActive,
  },
})
export default class extends Vue {}
</script>

