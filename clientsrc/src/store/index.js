import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    dates: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setDates(state, dates) {
      state.dates = dates
    },
    addNewDate(state, date) {
      state.dates.push(date)
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllDates({ commit, dispatch }) {
      try {
        let res = await api.get("dates");
        commit("setDates", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addDate({ commit, dispatch }, newDate) {
      try {
        let res = await api.post("dates", newDate)
        commit("addNewDate", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
});
