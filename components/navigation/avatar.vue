<template>
  <v-toolbar text height="128px" color="text--darken-3" class="drawer-toolbar">
    <v-toolbar-title>
      <v-avatar class="mx-auto indigo lighten-5 avatar" size="84">
        <img
          src="//ww1.sinaimg.cn/small/89d0a2e1ly1ft1me6ffa9j203k03kglt.jpg"
        />
      </v-avatar>
    </v-toolbar-title>
    <v-toolbar-title style="margin-left:0;">
      <v-btn text rounded class="name indigo--text text--lighten-5" to="/root"
        >宫不上</v-btn
      >
    </v-toolbar-title>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
class Avatar extends Vue {}

export default Avatar;
</script>
<style scoped>
.drawer-toolbar {
  background: linear-gradient(60deg, #7986cb, #8891bf);
}
.name {
  font-size: 28px;
  font-weight: bold;
  text-shadow: #7986cb -1px 1px 3px;
  letter-spacing: 4px;
}
.avatar {
  border: 48px solid;
}
.avatar:hover {
  animation: spin 0.35s linear infinite;
}
</style>
