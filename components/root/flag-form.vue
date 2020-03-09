<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="url"
      :rules="urlRules"
      label="url"
      required
    ></v-text-field>
    <v-text-field
      v-model="imgUrl"
      :rules="imgRules"
      label="img"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-btn :disabled="!valid" rounded dark color="indigo" @click="submit">
      submit
    </v-btn>
  </v-form>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import gql from "graphql-tag";

// const mutation = gql`
//   mutation addItem(
//     $name: String!
//     $url: String!
//     $img: String!
//     $category: Category!
//   ) {
//     addItem(name: $name, url: $url, img: $img, category: $category) {
//       _id
//     }
//   }
// `;

@Component
class FlagForm extends Vue {
  name = "";
  url = "";
  imgUrl = "";
  select = null;
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      url: "",
      urlRules: [(v) => !!v || "url is required"],
      imgUrl: "",
      imgRules: [(v) => !!v || "img is required"],
      select: null,
      items: ["code", "map", "note", "canvas", "gym", "japanese", "english"]
    };
  }

  submit() {
    // const { name, url, imgUrl, select } = this;
    // console.log(this);
    try {
      // this.$apollo
      //   .mutate({
      //     mutation,
      //     variables: {
      //       name,
      //       url,
      //       img: imgUrl,
      //       category: select,
      //     },
      //   })
      //   .then(({ data: { addItem: { _id } } }) => alert(`${_id} 添加成功`));
    } catch (error) {
      // console.log(error);
    }
  }
}

export default FlagForm;
</script>
