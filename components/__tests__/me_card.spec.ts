import { shallowMount } from "@vue/test-utils";
import MeCard from "../me_card/index.vue";

describe("MeCard", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MeCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
