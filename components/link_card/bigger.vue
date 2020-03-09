<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="bigger-card">
        <v-card-media
          :src="img"
          height="200px"
          class="bigger-media"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div>{{ content }}</div>
          </div>
        </v-card-title>

        <v-card-actions v-if="btnText" class="bigger-action">
          <v-btn flat color="indigo" rounded @click="goto">{{ btnText }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";

export interface IBiggerLinkProps {
  img: string;
  btnText?: string;
  url?: string;
  title: string;
  content: string;
}

@Component
class Bigger extends Vue {
  @Prop(String) img: string;
  @Prop(String) btnText: string;
  @Prop(String) url: string;
  relatives;
  @Prop(String) title: string;
  @Prop(String) content: string;
  goto() {
    window.open(this.url, "new");
  }
}

export default Bigger;
</script>
<style scoped>
.bigger-card {
  position: relative;
  margin-top: 184px;
  padding-top: 48px;
}
.bigger-media {
  position: absolute;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
  top: -164px;
  border-radius: inherit;
  box-shadow: 1px 2px 8px 0px rgba(26, 35, 126, 0.33725),
    0 4px 6px 0 rgba(26, 35, 126, 0.07059), 0 8px 10px 0 rgba(0, 0, 0, 0.13333);
}
.bigger-action {
  justify-content: flex-end;
}
</style>
