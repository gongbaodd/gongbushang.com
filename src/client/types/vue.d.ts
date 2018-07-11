import Vue from 'vue';

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface Vue {
    $apollo: any;
    $apolloHelpers: {
      onLogin(token: string);
      onLogout();
      getToken(): string;
    };
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // myOption?: string
    apollo?: any;
  }
}
