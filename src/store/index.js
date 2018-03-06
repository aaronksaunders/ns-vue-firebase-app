import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    counter,
    auth,
  },
  strict: debug,
});
