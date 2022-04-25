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
    amountOptions: [
      { name: "10", value: 10 },
      { name: "25", value: 25 },
      { name: "50", value: 50 },
      { name: "100", value: 100 },
      { name: "All", value: "all" },
    ],
    amountSelected: "10",
    currentPage: 1,
  },
  getters: {
    sortedList(state) {
      if (state.amountSelected === "all") return state.list;
      const startAt = +state.amountSelected * (state.currentPage - 1);
      return [...state.list]
        .reverse()
        .slice(startAt)
        .filter((item, index) => index < +state.amountSelected)
        .reverse();
    },
    totalPages(state) {
      return Math.ceil(state.list.length / state.amountSelected);
    },
  },
  mutations: {
    // List mutations
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
      state.currentPage = 1;
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

    // Selection mutation
    setAmountSelected(state, value) {
      state.amountSelected = value;
      state.currentPage = 1;
    },

    // Pagination mutation
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {},
  modules: {},
});
