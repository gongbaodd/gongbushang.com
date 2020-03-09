<template>
  <v-container grid-list-xl>
    <v-layout v-if="!token">
      <v-flex>
        <v-card>
          <v-card-title>登入</v-card-title>
          <v-card-text>
            <Form />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout v-if="token">
      <v-flex>
        <v-card>
          <v-card-title>登出</v-card-title>
          <v-card-text>
            <v-btn rounded dark class="indigo" @click="logout">退出</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout v-if="token">
      <v-flex>
        <v-card>
          <v-card-title>添加内容</v-card-title>
          <v-card-text>
            <FlagForm />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Mutation } from "vuex-class";
import FlagForm from "../components/root/flag-form.vue";
import Form from "../components/root/form.vue";
@Component({
  components: {
    Form,
    FlagForm
  }
})
class Root extends Vue {
  @State(({ login: { token } }) => token)
  token;

  @Mutation("login/login") login;

  @Mutation("login/logout") logout;

  mounted() {
    // this.login(this.$apolloHelpers.getToken());
  }
}

export default Root;
</script>
