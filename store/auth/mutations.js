export default {
  /**
   * Set auth user state
   * @param {object} state
   * @param {object} user
   */
  ['SET_AUTH_USER'](state, user) {
    state.user = user;
  },

  ['SET_COMPLETE_AUTH_USER'](state, user) {
    state.user = user;
  },

  ['SET_USER_NAME'](state, user) {
    state.user.username = user.username;
  },

  ['SET_USER_THEME'](state, theme) {
    state.user.theme = theme;
  },

  ['SET_USER_PICTURE'](state, picture) {
    state.user['picture'] = picture;
  },

  ['SET_EMAIL_ADDRESS'](state, email) {
    state.user['email'] = email;
  }
}