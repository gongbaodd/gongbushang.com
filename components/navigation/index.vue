<template>
  <v-navigation-drawer
    v-model="value"
    :mobile-break-point="width"
    class="navigation"
  >
    <v-layout class="background" fill-height column>
      <Avatar />
      <v-divider></v-divider>

      <v-flex class="drawer-flex">
        <v-list class="pt-0 pb-5" dense three-line>
          <ListTile :key="myWorld.title" :item="myWorld" />
          <ListTile :key="myCode.title" :item="myCode" />
          <ListTile :key="myFlag.title" :item="myFlag" />
          <ListTile :key="myTimeline.title" :item="myTimeline" />
          <ListGroup v-for="item in items" :key="item.key" :item="item" />
          <ListTile :key="myContact.title" :item="myContact" />

          <v-spacer></v-spacer>
        </v-list>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import { State, Mutation } from "vuex-class";
import Component from "nuxt-class-component";
import Avatar from "./avatar.vue";
import ListTile from "./listTile.vue";
import ListGroup from "./listGroup.vue";
@Component({
  components: { Avatar, ListTile, ListGroup }
})
class Navigation extends Vue {
  @State(({ navigation: { drawer } }) => drawer)
  drawer;

  @Mutation("navigation/toggle") toggle;

  get value() {
    return this.drawer;
  }

  set value(v: boolean) {
    if (v !== this.drawer) {
      this.toggle();
    }
  }

  myWorld = {
    title: "我的世界",
    icon: "fab fa-globe",
    url: "/"
  };

  myCode = {
    title: "戎码生涯",
    icon: "code",
    url: "/code"
  };

  myFlag = {
    title: "福来阁",
    icon: "flag",
    url: "/flag"
  };

  myTimeline = {
    title: "时间轴",
    icon: "fab fa-clock-o",
    url: "/timeline"
  };

  myContact = {
    title: "找我玩呀",
    icon: "question_answer",
    url: "/contact"
  };

  data() {
    return {
      items: [
        {
          title: "我的生活",
          icon: "fab fa-calendar",
          active: false,
          items: [
            {
              title: "我的远方",
              icon: "flight_takeoff",
              url: "/map"
            },
            {
              title: "我的诗歌",
              icon: "music_note",
              url: "/note"
            },
            {
              title: "随手画画",
              icon: "palette",
              url: "/canvas"
            },
            {
              title: "游泳健身",
              icon: "accessibility_new",
              url: "/gym"
            }
          ]
        },
        {
          title: "我的学习",
          icon: "fab fa-language",
          active: false,
          items: [
            {
              title: "我的英语",
              icon: "fab fa-gbp",
              url: "/english"
            },
            {
              title: "我的日语",
              icon: "fab fa-jpy",
              url: "/japanese"
            }
          ]
        }
      ]
    };
  }

  width = 800;

  mounted() {
    if (window.innerWidth > 800) {
      this.toggle();
    }
  }
}

export default Navigation;
</script>
<style scoped>
.navigation {
  box-shadow: 0 16px 38px 0px #1a237e56, 0 4px 25px 0 #1a237e12,
    0 8px 10px 0 #00000022;
  border-top-right-radius: 24px;
}
.background {
  position: absolute;
  background-image: url("//ww1.sinaimg.cn/mw690/89d0a2e1ly1ft1mwji1drj23s22ipqr2.jpg");
  top: 0;
  left: 0;
  background-position: bottom;
  width: 100%;
  background-size: cover;
}
.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background: #e8eaf6;
}

.drawer-flex {
  overflow: scroll;
}
</style>
