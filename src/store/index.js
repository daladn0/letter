import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      { id: 1, word: "Something", definition: "Щось", createdAt: "2022.04.24" },
      { id: 2, word: "Awful", definition: "Жахливе", createdAt: "2022.04.24" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
