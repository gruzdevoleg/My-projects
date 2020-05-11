import stocks from '../../data/stocks';
const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },

    //ставим всем стокам новые цены
    'RND_STOCKS' (state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
    },


};

const actions = {
    buyStock({ commit }, order) {
      //коммитит мутацию BUY_STOCK из модуля portfolio, передавая ей сток, который покупаем
        commit('BUY_STOCK', order);
    },
    initStocks({ commit }) {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks({ commit }) {
        commit('RND_STOCKS');
    }

};
const getters = {
    stocks(state) {
      return state.stocks;
    } 
};
export default {
    state,
    actions,
    mutations,
    getters
}