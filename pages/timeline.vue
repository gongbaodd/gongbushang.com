<template>
  <v-container grid-list-xl>
    <BiggerCard
      v-for="item in items"
      :key="item.img"
      :btn-text="item.btnText"
      :img="item.img"
      :title="item.title"
      :content="item.content"
      :url="item.url"
    />
  </v-container>
</template>
<script lang="ts">
// tslint:disable:max-line-length
import Vue from "vue";
import Component from "vue-class-component";
import BiggerCard, {
  IBiggerLinkProps
} from "../components/link_card/bigger.vue";
@Component({
  components: {
    BiggerCard
  }
})
class TimeLine extends Vue {
  items: IBiggerLinkProps[] = [
    {
      title: "离职去哪儿网",
      content: "23/5/2018",
      img: "https://ws1.sinaimg.cn/mw690/89d0a2e1ly1ft57fyw9kcj23401k0kjm.jpg",
      btnText: "看下工作的最后一天",
      url: "https://www.bilibili.com/video/av25634470"
    },
    {
      title: "【erʌpt】一个前后端同构的设计思想",
      content: "15/8/2017",
      img: "http://ww1.sinaimg.cn/mw690/89d0a2e1ly1fiyoot1ss4j20m80gojsi.jpg",
      btnText: "前往博客",
      url:
        "http://gongbaodd.github.io/fe/2017/08/15/Er%CA%8Cpt-%E4%B8%80%E4%B8%AA%E5%89%8D%E5%90%8E%E7%AB%AF%E5%90%8C%E6%9E%84%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83%B3.html"
    },
    {
      title: "[分享]typescript干货",
      content: "4/5//2017",
      img: "http://www.redspark.io/wp-content/uploads/2015/11/typescript.png",
      btnText: "前往博客",
      url:
        "http://gongbaodd.github.io/fe/2017/05/04/1TypeScript%E5%B9%B2%E8%B4%A7.html"
    },
    {
      title: "[分享]高效你的组件化开发",
      content: "24/10/2016",
      img:
        "http://img.mp.itc.cn/upload/20161027/4bb6b1f3c19d410faa1df829795666a6_th.jpeg",
      btnText: "去看看",
      url: "http://www.sohu.com/a/117366548_505779"
    },
    {
      title: "[分享]用Riot.js开发前端组件",
      content: "1/3/2016",
      img: "https://riot.js.org/img/logo/riot240x.png",
      btnText: "看一下",
      url: "https://v.youku.com/v_show/id_XMTUxMjMyMzM0OA==.html"
    },
    {
      title: "会员红包,在去哪儿的第一个项目",
      content: "1/8/2015",
      img: "https://ws1.sinaimg.cn/mw690/89d0a2e1ly1ft56buglnzj208x07etbe.jpg",
      btnText: "或许你还能抢一个",
      url:
        "https://pay.qunar.com/mobile/member/activity/index.htm?amount=&busiTypeId=ZFZX&did=000000&gid=8438932D-5548-D769-1AF7-22274CDE88E4&merchantCode=ZFZXBKFHBJK&option=0&pid=10010&schema=&source=pay_appbanner&userId=&version=20140808&vid=000000&HMAC=9db3625962bbdf521d245200e625b182"
    },
    {
      title: "我毕业啦",
      content: "1/7/2015",
      img: "https://ws1.sinaimg.cn/mw690/89d0a2e1ly1ft55kvyqhbj214y0vj49x.jpg"
    },
    {
      title: "在去哪儿的实习生活",
      content: "13/12/2014",
      img: "https://ws1.sinaimg.cn/mw690/89d0a2e1ly1ft564jgikfj21hc0u0q8z.jpg"
    }
  ];
}

export default TimeLine;
</script>
