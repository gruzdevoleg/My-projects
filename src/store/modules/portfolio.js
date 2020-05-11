const state = {
    funds: 1000,
    stocks: []
}

const mutations = {
    'BUY_STOCK' (state, {id, price, quantity}) {
      const stock = state.stocks.find(el => el.id == id);
      stock ? stock.quantity += quantity : state.stocks.push({
        id: id,
        price: price,
        quantity: quantity
      });
      //console.log(state.stocks);
      state.funds -= price * quantity;
     },

    'SELL_STOCK' (state, {id, price, quantity}) {
      const stock = state.stocks.find(el => el.id == id);
      stock.quantity > quantity ? stock.quantity -= quantity : state.stocks.splice(state.stocks.indexOf(stock), 1);
      state.funds += price * quantity;
    },

    'SET_PORTFOLIO' (state, portfolio) {
      state.funds = portfolio.funds;
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []; 
    }


};

const actions = {
   sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
   }

};

const getters = {
    stockPortfolio(state, getters) {
      
      return state.stocks.map(stock => {
        const record = getters.stocks.find(el => el.id == stock.id);
        return {
          id: stock.id,
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