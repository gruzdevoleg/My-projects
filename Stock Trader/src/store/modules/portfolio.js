const state = {
    funds: 1000,
    stocks: []
}

const mutations = {
    'BUY_STOCK' (state, {stockId, stockPrice, quantity}) {
      const stock = state.stock.find(el => el.stockId == stockId);
      stock ? stock.quantity += quantity : state.stocks.push({
        stockId: stockId,
        stockPrice: stockPrice,
        quantity: quantity
      });
      //console.log(state.stocks);
      state.funds -= stockPrice * quantity;
     },

    'SELL_STOCK' (state, {stockId, stockPrice, quantity}) {
      const stock = state.stock.find(el => el.stockId == stockId);
      stock.quantity > quantity ? stock.quantity -= quantity : state.stocks.splice(state.stocks.indexOf(stock), 1);
      state.funds += stockPrice * quantity;
    },


};

const actions = {
   sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
   }

};
const getters = {
    stockPortfolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(el => el.stockId == stockId);
        return {
          stockId: stock.stockId,
          quantity: stock.quantity,
          price: record.price,
          name: record.name
        }
      })
    },

    funds(state) {
      return state.funds;
    }
};
export default {
    state,
    actions,
    mutations,
    getters
}