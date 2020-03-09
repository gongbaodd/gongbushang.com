const initState = {
  drawer: true
};

export const state = () => ({ ...initState });

export const mutations = {
  toggle(s: typeof initState) {
    s.drawer = !s.drawer;
  }
};
