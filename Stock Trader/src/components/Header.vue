<template>
    
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-default">
    <div class="container">
   <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </b-navbar-nav>
      <strong class="navbar-text navbar-right">Your funds: {{ myFunds | currency }}</strong>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
         href="#"
         @click="endDay"
         text="End Day">End Day</b-nav-item>
        <b-nav-item-dropdown text="Save & Load">
          <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
          <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>

</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  
  methods: {

    //мапируем из store необходимые экшны, после чего можем их вызывать через this
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  },
  computed: {
    //мапируем из store необходимые геттеры
    ...mapGetters({
    myFunds: 'funds'
  })
  }
  
}
</script>