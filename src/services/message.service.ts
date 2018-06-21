import Vuex, { StoreOptions } from 'vuex';
import Vue from 'vue'


Vue.use(Vuex);


const state = {
  messages: []
};


const messages = {
    state
};


export const store = new Vuex.Store(messages);