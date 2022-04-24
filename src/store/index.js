import { createStore } from "vuex";

function getNewID(list) {
  const lastItemOfList = list[list.length - 1];
  return lastItemOfList ? lastItemOfList.id + 1 : 1;
}

function saveList(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

export default createStore({
  state: {
    list: [],
  },
  getters: {},
  mutations: {
    setList(state, list) {
      state.list = list;
    },

    addItem(state) {
      const newItem = {
        id: getNewID(state.list),
        word: "",
        definition: "",
        createdAt: new Date(),
      };
      state.list.push(newItem);
      saveList(state.list);
    },

    removeItem(state, id) {
      state.list = state.list.filter((item) => item.id !== id);
      saveList(state.list);
    },

    updateItem(state, { id, value, type }) {
      const itemToUpdate = state.list.find((item) => item.id === id);
      if (!itemToUpdate) return;
      itemToUpdate[type] = value;
      saveList(state.list);
    },
  },
  actions: {},
  modules: {},
});
