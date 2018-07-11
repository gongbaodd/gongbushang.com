// tslint:disable:no-string-literal
const initState = {
  token: '',
};
export const state = () => ({ ...initState });
export const mutations = {
  login(s: typeof initState, token: string) {
    this['$apolloHelpers'].onLogin(token);
    s.token = token;
  },
  logout(s: typeof initState) {
    this['$apolloHelpers'].onLogout();
    s.token = '';
  },
};
