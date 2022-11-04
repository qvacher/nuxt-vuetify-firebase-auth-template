/**
 * Get auth user
 * @param state
 * @returns {object|*}
 */
 export const getUser = (state) => state.user;

 /**
 * Get user theme
 * @param state
 * @returns {object|*}
 */
  export const getTheme = (state) => state.user.theme;