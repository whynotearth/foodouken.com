// initial state
const state = {
  cartItems: []
};

// getters
const getters = {
  cartItems: state => {
    return state.cartItems;
  },
  subTotal: state => {
    return state.cartItems.reduce(
      (runningTotal, cartItem) =>
        runningTotal + cartItem.product.price * cartItem.count,
      0
    );
  }
};

// actions
const actions = {
  addCartProduct({ commit, state }, product) {
    let cartItem = state.cartItems.filter(ci => ci.product === product)[0];
    if (!cartItem) {
      commit('addCartProduct', product);
    } else {
      commit('incrementCartProduct', product);
    }
  },
  incrementCartProduct({ commit }, product) {
    commit('incrementCartProduct', product);
  },
  decrementCartProduct({ commit }, product) {
    let cartItem = state.cartItems.filter(ci => ci.product === product)[0];
    if (!cartItem || cartItem.count < 1) {
      return;
    }
    if (cartItem.count === 1) {
      commit('removeCartProduct', product);
    } else {
      commit('decrementCartProduct', product);
    }
  },
  removeCartProduct({ commit }, product) {
    let cartItem = state.cartItems.filter(ci => ci.product === product)[0];
    if (!cartItem || cartItem.count < 1) {
      return;
    }
    commit('removeCartProduct', product);
  }
};

// mutations
const mutations = {
  addCartProduct(state, product) {
    state.cartItems.push({
      product: product,
      count: 1
    });
  },
  incrementCartProduct(state, product) {
    let cartItem = state.cartItems.filter(ci => ci.product == product)[0];
    if (cartItem.count < 999) {
      cartItem.count = cartItem.count + 1;
    }
  },
  decrementCartProduct(state, product) {
    let cartItem = state.cartItems.filter(ci => ci.product == product)[0];
    cartItem.count--;
  },
  removeCartProduct(state, product) {
    state.cartItems = state.cartItems.filter(ci => ci.product != product);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
