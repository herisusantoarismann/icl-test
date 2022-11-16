import { createStore } from 'vuex';
import mutations from './mutations';
import states from './state';

const store = createStore({ state: states, mutations: mutations });

export default store;
