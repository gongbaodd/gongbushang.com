<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <LinkCard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :icon-style="item.iconStyle"
        :sub-title="item.subTitle"
        :btn-text="item.btnText"
        :to="item.to"
        :nuxt-to="item.nuxtTo"
      />
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LinkCard from "../link_card/index.vue";
@Component({
  components: {
    LinkCard,
  },
})
class Links extends Vue {
  items = [
    {
      title: "我的博客",
      subTitle: "my blog",
      icon: "fa-rss",
      iconStyle: {
        background: "linear-gradient(60deg,#ffa726,#fb8c00)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(255,152,0,.4)`,
      },
      btnText: "了解一下下",
      to: "https://blog.gongbushang.com/",
    },
    {
      title: "我的代码库",
      subTitle: "my code",
      icon: "fa-code",
      iconStyle: {
        background: "linear-gradient(60deg,#26c6da,#00acc1)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(0,188,212,.4)`,
      },
      btnText: "欢迎来review",
      to: "https://github.com/gongbaodd",
    },
    {
      title: "找我玩呀",
      subTitle: "find me",
      icon: "fa-angellist",
      iconStyle: {
        background: "linear-gradient(60deg,#66bb6a,#43a047)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(76,175,80,.4)`,
      },
      btnText: "来啊来啊",
      nuxtTo: "/contact",
    },
    {
      title: "Typescript算法",
      subTitle: "用Typescript实现算法",
      icon: "",
      iconStyle: {},
      btnText: "了解一下",
      to: "https://algorithm.gongbushang.com",
    },
    {
      title: "WebGL实验室",
      subTitle: "试验WebGL",
      icon: "",
      iconStyle: {},
      btnText: "欢迎参观",
      to: "https://graphics.gongbushang.com",
    },
    {
      title: "CSS实验室",
      subTitle: "实验CSS",
      icon: "",
      iconStyle: {},
      btnText: "欢迎参观",
      to: "https://css.gongbushang.com",
    },
  ];
}

export default Links;
</script>
