<template>
  <v-container grid-list-xl>
    <Toobar title="Moderately active" />
    <v-layout row wrap>
      <LinkCard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :img="item.img"
        :icon-style="item.iconStyle"
        :sub-title="item.subTitle"
        :btn-text="item.btnText"
        :to="item.to"
      />
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LinkCard from "../link_card/index.vue";
import { bilibili, douban, netese } from "../../consts/img";
import Toobar from "./toobar.vue";
@Component({
  components: {
    Toobar,
    LinkCard,
  },
})
class MActive extends Vue {
  click() {}
  items = [
    {
      title: "CodeWars",
      subTitle: "gongbaodd",
      img:
        "https://www.codewars.com/assets/logos/logo-square-red-big-dc2f35502ee2b60882a41327c529521c.png",
      btnText: "一起刷题",
      to: "https://www.codewars.com/users/gongbaodd",
      iconStyle: {
        background: "#262626",
        boxShadow: `rgb(242, 236, 237) 0px 4px 20px 0px, rgba(255, 0, 0, 0.4) 0px 7px 10px -5px`,
      },
    },
    {
      title: "Github",
      subTitle: "gongbaodd",
      icon: "fa-github",
      btnText: "star me",
      to: "https://github.com/gongbaodd",
      iconStyle: {
        background: "#232323",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(0,0,0,.4)`,
      },
    },
    {
      title: "bilibili",
      subTitle: "gongbaodd",
      btnText: "求硬币！",
      img: bilibili,
      iconStyle: {
        background: "#fff",

        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(236, 239, 242) 0px 7px 10px -5px`,
        justifyContent: "center",
      },
    },
    {
      title: "Facebook",
      subTitle: "宫健",
      btnText: "求关注",
      icon: "fa-facebook",
      to: "https://www.facebook.com/profile.php?id=100005220018235",
      iconStyle: {
        background: "linear-gradient(60deg, #37538d, #2a3f6c)",
        boxShadow: `0 14px 26px -12px rgba(59,89,152,.42),0 4px 23px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(59,89,152,.2)`,
      },
    },
    {
      title: "开源中国",
      subTitle: "宫不上叔",
      btnText: "关注我吧",
      img: "https://www.oschina.net/dist/oschina/community/imgs/logo-osc.svg",
      to: "https://my.oschina.net/gongbaodd",
      iconStyle: {
        background: "linear-gradient(60deg,#66bb6a,#43a047)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(76,175,80,.4)`,
      },
    },
    {
      title: "CODING",
      subTitle: "宫不上叔",
      btnText: "关注我吧",
      img:
        "https://coding.net/help/wp-content/uploads/cache/2017/09/cropped-coding-log/3124175363.png",
      to: "https://coding.net/u/gongbaodd",
      iconStyle: {
        background: "rgb(247, 247, 247)",
        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(0, 0, 0, 0.2) 0px 7px 10px -5px`,
      },
    },
    {
      title: "豆瓣",
      subTitle: "宫不上叔",
      btnText: "爱咋咋地吧",
      img: douban,
      to: "https://www.douban.com/people/83717128/",
      iconStyle: {
        background: "rgb(247, 247, 247)",
        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(0, 0, 0, 0.2) 0px 7px 10px -5px`,
      },
    },
    {
      title: "网易云音乐",
      subTitle: "宫不上叔",
      btnText: "一起摇摆",
      img: netese,
      to: "http://music.163.com/#/user/home?id=46729015",
      iconStyle: {
        background: "linear-gradient(60deg, rgb(255, 38, 38), rgb(251, 0, 0))",
        boxShadow: `rgb(242, 236, 237) 0px 4px 20px 0px, rgba(255, 0, 0, 0.4) 0px 7px 10px -5px`,
      },
    },
    {
      title: "drbbble",
      btnText: "add me",
      icon: "fab fa-dribbble",
      subTitle: "MiaTakeshi",
      to: "https://dribbble.com/gongbaodd",
      iconStyle: {
        background:
          "linear-gradient(60deg, rgb(235, 99, 175), rgb(255, 0, 177))",
        boxShadow: `rgb(242, 236, 237) 0px 4px 20px 0px, rgba(255, 0, 0, 0.4) 0px 7px 10px -5px`,
      },
    },
  ];
}

export default MActive;
</script>
