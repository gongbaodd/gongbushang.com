<template>
    <v-toolbar flat class="transparent indigo--text">
        <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Component
export default class extends Vue {
  @Prop(String) title: string;
}
</script>

