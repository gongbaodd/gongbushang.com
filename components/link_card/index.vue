<template>
  <v-flex xs12 sm6 lg4 mt-5>
    <v-card>
      <v-layout row>
        <v-card-media class="link-card-media" :style="iconStyle">
          <v-icon v-if="icon" class="icon">
            {{ icon }}
          </v-icon>
          <img
            v-if="img"
            :src="img"
            style="width: 55%; height:55%;margin: 0 auto;"
          />
        </v-card-media>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ title }}</div>
            <span class="grey--text">{{ subTitle }}</span>
          </div>
        </v-card-title>
      </v-layout>

      <v-divider inset></v-divider>

      <v-card-actions right>
        <v-spacer></v-spacer>
        <v-btn
          :to="nuxtTo"
          flat
          rounded
          class="btn"
          color="grey"
          @click="goto"
          >{{ btnText }}</v-btn
        >
        <Dialog v-if="dlgImg" :btn-text="btnText" />
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Dialog from "./dialog.vue";
@Component({
  components: {
    Dialog
  }
})
class LinkCard extends Vue {
  @Prop(String) title: string;
  @Prop(String) icon: string;
  @Prop() iconStyle;
  @Prop() subTitle;
  @Prop(String) btnText: string;
  @Prop(String) to: string;
  @Prop(String) nuxtTo: string;
  @Prop(String) img: string;
  @Prop(String) dlgImg: string;
  goto() {
    if (this.to) {
      window.open(this.to, "new");
    }
  }
}

export default LinkCard;
</script>

<style scoped>
.link-card-media {
  height: 100px !important;
  width: 100px;
  border-radius: 24px;
  margin-top: -24px;
  margin-left: 12px;
  align-items: center;
}
.icon {
  margin: 0 auto;
  font-size: 32px;
  color: white;
}
</style>
