const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const state = {
  loggedIn: false,
  authChecked: false,
  user: null,
  error: null
};

const mutations = {
  decrement(state) {
    state.count--;
  },
  checkAuth(state, { authData }) {
    console.log("checkAuth", authData);
    state.authChecked = true;
    state.user = null;
  },
  checkAuthError(state, { error }) {
    console.log("checkAuthError", error);
    state.authChecked = true;
  },
  login(state, { user, error }) {
    state.authChecked = true;
    if (user) {
      console.log("login", user);
      state.user = user;
    } else {
      console.log("login.error", error);
      state.error = error;
    }
  },
  logout(state, { result, error }) {
    state.authChecked = false;
    state.user = null;
    if (error) {
      console.log("logout.error", error);
      state.error = error;
    } else {
      console.log("logged out");
    }
  }
};

const actions = {
  checkAuth: ({ commit }) => {
    firebase
      .init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        iOSEmulatorFlush: true
      })
      .then(
        authData => {
          console.log("firebase.init done", authData);
          commit("checkAuth", { authData });
        },
        error => {
          console.log(`firebase.init error: ${error}`);
          commit("checkAuthError", { error });
        }
      );
  },
  login: ({ commit }, { email, password }) => {
    firebaseWebApi
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        user => {
          commit("login", { user });
        },
        error => {
          console.log("firebase.login error:", error);
          commit("login", { error });
        }
      );
  },
  logout: ({ commit }) => {
    firebaseWebApi
      .auth()
      .signOut(email, password)
      .then(
        result => {
          commit("logout", { result });
        },
        error => {
          console.log("firebase.logout error:", error);
          commit("logout", { error });
        }
      );
  },
  decrement: ({ commit }) => commit("decrement")
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
