<script lang="ts">
import Vue from "vue";
import GithubCorner from "vue-github-corners";

export default Vue.extend({
  components: {
    GithubCorner,
  },
});
</script>

<template>
  <GithubCorner
    style="z-index: 1;"
    url="https://github.com/gongbaodd/gongbushang.com"
    corner-color="#3f51b5"
    git-color="#fff"
  />
</template>
