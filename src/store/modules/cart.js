// initial state
const state = {
  cartItems: [],
  subTotal: 0,
  totalTax: 0,
  total: 0
};

// getters
const getters = {
  cartItems(state) {
    return state.cartItems;
  },
  subTotal(state) {
    state.subTotal = state.cartItems.reduce(
      (runningTotal, cartItem) =>
        runningTotal + cartItem.product.price * cartItem.count,
      0
    );
    return state.subTotal;
  },
  totalTax(state, getters, rootState, rootGetters) {
    state.totalTax = (rootGetters['shop/getTaxRate'] * state.subTotal) / 100;
    return state.totalTax;
  },
  total(state, getters, rootState, rootGetters) {
    state.total =
      state.subTotal + rootGetters['shop/getDeliveryFee'] + state.totalTax;
    return state.total;
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
  decrementCartProduct({ commit, state }, product) {
    delete product.discountPrice;
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
  removeCartProduct({ commit, state }, product) {
    delete product.discountPrice;
    let cartItem = state.cartItems.filter(ci => ci.product === product)[0];
    if (!cartItem || cartItem.count < 1) {
      return;
    }
    commit('removeCartProduct', product);
  },
  clearAllCartItems({ commit }) {
    commit('resetCartItems');
  }
};

// mutations
const mutations = {
  resetCartItems(state) {
    state.cartItems = [];
  },
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
    cartItem.count = cartItem.count - 1;
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
