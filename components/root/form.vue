<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="password"
      :rules="pwdRules"
      :counter="20"
      label="Password"
      required
      type="password"
    ></v-text-field>
    <v-layout justify-center>
      <v-btn :disabled="!valid" rounded dark color="indigo" @click="submit">
        submit
      </v-btn>
    </v-layout>
  </v-form>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import gql from "graphql-tag";
import { Mutation } from "vuex-class";
// const loginSchema = gql`
//   mutation login($password: String!) {
//     login(password: $password)
//   }
// `;

// const testSchema = gql`
//   query test {
//     hi
//   }
// `;

@Component({
  // apollo: {
  //   hello: {
  //     query: testSchema,
  //     update(data) {
  //       console.log(data);
  //     }
  //   }
  // }
})
class Form extends Vue {
  password = "";
  data() {
    return {
      valid: true,
      password: "",
      pwdRules: [(v) => !!v || "password is required"]
    };
  }

  @Mutation("login/login") login;

  submit() {
    try {
      // const {
      //   data: { login }
      // } = await this.$apollo.mutate({
      //   mutation: loginSchema,
      //   variables: {
      //     password: this.password
      //   }
      // });
      // this.login(login);
    } catch (e) {
      // tslint:disable:no-console
      // console.log(e);
    }
  }
}

export default Form;
</script>
