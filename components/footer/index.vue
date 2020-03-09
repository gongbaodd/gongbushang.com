<template>
  <v-layout>
    <v-footer dark height="auto">
      <v-card flat tile class=" white--text text-xs-center footer-card">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
            @click="goto($event, icon)"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <v-layout row justify-center>
            <v-btn color="lighten-2" rounded href="mailto:gongbaodd@qq.com">
              <v-icon>mail</v-icon>
              <v-flex d-flex>g*******@qq.com</v-flex>
            </v-btn>
          </v-layout>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>gongbushang.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
class Footer extends Vue {
  items = [
    {
      icon: "fab fa-github",
      to: "https://github.com/gongbaodd"
    },
    {
      icon: "fab fa-twitter",
      to: "https://twitter.com/gongbaodd"
    },
    {
      icon: "fab fa-weibo",
      to: "https://weibo.com/u/2312151777"
    },
    // {
    //   icon: 'fab fa-facebook',
    //   to: 'https://www.facebook.com/profile.php?id=100005220018235',
    // },
    // {
    //   icon: 'fab fa-google-plus',
    //   to: 'https://plus.google.com/u/0/107016600073052430341',
    // },
    // {
    //   icon: 'fab fa-linkedin',
    //   to: 'https://www.linkedin.com/in/jian-gong-27762aa8/',
    // },
    {
      icon: "fab fa-instagram",
      to: "https://www.instagram.com/mia_takeshi/"
    }
  ];

  icons = this.items.map((i) => i.icon);
  goto(event, icon) {
    location.href = this.items.filter(({ icon: i }) => i === icon)[0].to;
  }
}

export default Footer;
</script>
<style scoped>
.footer-card {
  width: 100%;
}
</style>
