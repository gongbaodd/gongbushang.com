const initState = {
  drawer: false
};

export const state = () => ({ ...initState });

export const mutations = {
  toggle(s: typeof initState) {
    s.drawer = !s.drawer;
  }
};
