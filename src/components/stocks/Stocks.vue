<template>
    <div class="stocks-container row">
        <app-stock
            :key="stock.id"
            :stock="stock"
            v-for="stock in stocks"
        ></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
            //console.log(this.$store.getters.stocks);
        }
    },
   
}
</script>