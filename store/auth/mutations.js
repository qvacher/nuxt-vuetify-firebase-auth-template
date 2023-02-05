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
}