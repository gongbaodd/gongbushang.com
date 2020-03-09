<template>
  <v-container grid-list-xl>
    <Toobar title="active" />
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
        :dlg-img="item.dlgImg"
      />
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { jike } from "../../consts/img";
import LinkCard from "../link_card/index.vue";
import Toobar from "./toobar.vue";
@Component({
  components: {
    Toobar,
    LinkCard
  }
})
class Active extends Vue {
  click() {}
  items = [
    {
      title: "微博",
      subTitle: "宫不上叔",
      icon: "fa-weibo",
      btnText: "快关注我",
      to: "https://weibo.com/u/2312151777",
      iconStyle: {
        background: "linear-gradient(60deg, rgb(255, 38, 38), rgb(251, 0, 0))",
        boxShadow: `rgb(242, 236, 237) 0px 4px 20px 0px, rgba(255, 0, 0, 0.4) 0px 7px 10px -5px`
      }
    },
    {
      title: "微信",
      subTitle: "gongbaodd",
      icon: "fa-wechat",
      iconStyle: {
        background: "linear-gradient(60deg,#66bb6a,#43a047)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),
                    0 7px 10px -5px rgba(76,175,80,.4)`
      }
    },
    {
      title: "即刻",
      subTitle: "宫不上叔",
      img: jike,
      iconStyle: {
        background: "#ffe410",
        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(236, 239, 242) 0px 7px 10px -5px`,
        justifyContent: "center"
      }
    },
    {
      title: "Twitter",
      subTitle: "@gongbaodd",
      btnText: "求关注",
      icon: "fa-twitter",
      to: "https://twitter.com/gongbaodd",
      iconStyle: {
        background:
          "linear-gradient(60deg, rgb(85, 172, 238), rgb(84, 171, 213))",
        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(138, 195, 252) 0px 7px 10px -5px`
      }
    },
    {
      title: "V2EX",
      subTitle: "gongbaodd",
      btnText: " 别点了我不会理你的",
      img: "https://www.v2ex.com/static/img/v2ex_192.png",
      to: "https://www.v2ex.com/member/gongbaodd",
      iconStyle: {
        background: "rgb(247, 247, 247)",
        boxShadow: `rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgb(0, 0, 0, 0.2) 0px 7px 10px -5px`
      }
    },
    {
      title: "instagram",
      subTitle: "mia_takeshi",
      btnText: "卖包的就别加了",
      icon: "fa-instagram",
      to: "https://www.instagram.com/mia_takeshi/",
      iconStyle: {
        background: "linear-gradient(60deg, rgb(156, 39, 176), #ffb307)",
        boxShadow: `0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(156,39,176,.4)`
      }
    }
  ];
}

export default Active;
</script>
