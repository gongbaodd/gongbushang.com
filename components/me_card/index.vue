<script lang="ts">
import Character from "../character/index.vue";
import { introduction as Meta } from "../../consts/introduction";

const MeCard = {
  name: "MeCard",
  components: {
    Character,
  },
  data() {
    return {
      title: Meta.title,
      topic: Meta.topic,
    };
  },
};

export default MeCard;
</script>

<template>
  <v-container class="me-card-container" grid-list-xl>
    <v-layout row>
      <v-flex xs12 sm12 lg12 class="me-card">
        <v-container class="character">
          <v-layout class="character-inner">
            <Character />
          </v-layout>
        </v-container>

        <v-card>
          <v-card-title primary-title style="height: 200px;" class="card-title">
            <div class="head-title">
              <div class="headline head-1">
                欢迎来到
              </div>
              <div class="headline head-2 grey--text">
                <strong class="indigo--text">{</strong>
                宫不上
                <strong class="indigo--text">}</strong>
              </div>
              <div class="headline head-3">
                的世界
              </div>
            </div>
          </v-card-title>

          <v-layout row wrap class="me-all">
            <v-card-text class="me-text chs-text">
              <p>我是宫不上，我有很多名号。</p>
              <ul>
                <li v-for="t in title.chs" :key="t">{{ t }}</li>
              </ul>
            </v-card-text>

            <v-card-text class="me-text">
              <p>
                Hello, you can call me Kung. yeah, Kung Pao Chicken's Kung. I
                have a lot titles.
              </p>
              <ul>
                <li v-for="t in title.eng" :key="t">{{ t }}</li>
              </ul>
            </v-card-text>
          </v-layout>
        </v-card>

        <v-toolbar flat class="transparent"></v-toolbar>

        <v-card>
          <v-layout row wrap class="me-all">
            <v-card-text class="me-text chs-text">
              <p>我喜欢的话题</p>
              <ul class="topics">
                <li v-for="t in topic.chs" :key="t">{{ t }}</li>
              </ul>
            </v-card-text>
            <v-card-text class="me-text">
              <p>These are the topics I like.</p>
              <ul class="topics">
                <li v-for="t in topic.eng" :key="t">{{ t }}</li>
              </ul>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.me-card {
  position: relative;
}
.me-card-container {
  padding-top: 0;
}

.card-title {
  padding-left: 42px;
}

.head-title {
  flex: 1;
}
.headline {
  line-height: 48px !important;
  letter-spacing: 4px !important;
}
.head-1 {
  font-size: 38px !important;
}
.head-2 {
  font-size: 36px !important;
}
.head-3 {
  font-size: 38px !important;
}
.character {
  position: absolute;
  z-index: 1;
  right: 12px;
  top: -48px;
  width: 460px;
  height: 100%;
  max-height: 300px;
}
.character-inner {
  height: 100%;
}
.me-all {
  max-width: 800px;
}
.me-text {
  padding: 32px;
  max-width: 400px;
}

.me-text ul {
  list-style: inside;
}

.me-text ul.topics {
  list-style: none;
}

.me-text ul.topics li::before {
  content: "# ";
}

.chs-text {
  letter-spacing: 2px;
}

.chs-text p {
  text-indent: 1em;
}

@media screen and (max-width: 800px) {
  .me-card-container {
    padding-top: 58px;
  }
  .character {
    z-index: 1;
    top: -88px;
    width: 100%;
    /* height: 30%; */
    max-height: 200px;
  }

  .card-title {
    padding-top: 42px;
    padding-left: 0;
  }

  .headline {
    text-align: center;
  }

  .character-inner {
    width: 50%;
    margin-left: auto !important;
    margin-right: auto !important;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
