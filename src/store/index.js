import { createStore } from "vuex";

export default createStore({
  state: {
    msg: "Vuex desde cero con getters",
    name: "Sergio Osbaldo",
    lastName: "José García",
    amigos: [],
    amigo: null
  },
  mutations: {
    addFriend(state) {
      state.amigos = [state.amigo, ...state.amigos]; //Split Operator
    }
  },
  actions: {
    addFriendAction(contex) {
      contex.commit("addFriend");
    }
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
    fullName(state) {
      return `${state.name} ${state.lastName}.`;
    }
  }
});
