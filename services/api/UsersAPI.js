class _UsersAPI {
  async createUser(user){
    try {
      const response = await $nuxt.$fire.firestore.collection('users').doc(user.uid).set(user);
      return Promise.resolve(response);
    } catch(error) {
      return Promise.resolve(error);
    }
  }
}

const UsersAPI = new _UsersAPI();

export default UsersAPI;