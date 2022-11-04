import UsersAPI from "~/services/api/UsersAPI";

export async function onAuthStateChangedAction ({ commit, state }, { authUser, claims }) {
  if (!authUser) {
    commit('SET_AUTH_USER', null);
    this.$router.push({path: 'auth/login'});
  } else {
    const { uid, email } = authUser;
    if(!state.user){
      commit('SET_AUTH_USER', {
        uid,
        email
      });
    }
  }
}

/**
 * Setup the user
 * @param commit
 * @param state
 * @returns {Promise<boolean>}
 */
 export async function setAuthUser({ commit, state }, payload) {
  const user = await UsersAPI.createUser(payload);
  commit('SET_COMPLETE_AUTH_USER', payload);
  return Promise.resolve(true);
}

export async function setUserInfo({ commit, state }, id) {
  const user = await UsersAPI.setUserInfos(id);
  commit('SET_AUTH_USER', user.data());
  return Promise.resolve(true);
}