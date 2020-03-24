<script lang="ts">
/* eslint-disable no-useless-escape */
import Vue from "vue";
import postscribe from "postscribe";

const UTTERANCE = `
<script src="https://utteranc.es/client.js"
        repo="gongbaodd/gongbushang.com"
        issue-term="url"
        label="comments"
        theme="github-dark"
        crossorigin="anonymous"
        async>
<\/script>
`;

export default Vue.extend({
  mounted() {
    postscribe("#utterances", UTTERANCE);
  },
});
</script>

<template>
  <div id="utterances"></div>
</template>
