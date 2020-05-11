<template>
    <!-- <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>({{ stock.price }})</small>
                </h3>
            </div>
        </div>
    </div> -->
<div class="card--wrapper col-sm-6 col-md-4">
    <div class="card col">
        <h3 class="card-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price }})</small>
        </h3>
        <div class="input-group justify-content-between">
            <div class="pull-left">
                <input 
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity"
                :class="{danger: insufficientFunds}"
                >
            </div>
            <div class="pull-right">
                <button 
                class="btn btn-success"
                @click="buyStock"
                :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)"
                >{{ insufficientFunds ? 'Insufficient Funds': 'Buy' }}</button>
            </div>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
<script>
export default {
    props: ['stock'],
    data() {
        return {
            //stock: this.stockItem,
            quantity: 0
        }
    },

    computed: {
      insufficientFunds() {
        return this.stock.price * this.quantity >= this.$store.getters.funds;
      }
    },

    methods: {
        buyStock() {
         
          this.$store.getters.funds;
            const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity,
            };
            //console.log(order);
            this.quantity = 0;
            //дергаем action buyStock (передавая ему сток, который покупаем).
            //Экшн в свою очередь коммитит мутацию BUY_STOCK из модуля portfolio
            //при этом экшн и мутация могут находиться в разных модулях (как у нас) 
            this.$store.dispatch('buyStock', order);
            
        },

        
    }
}
</script>

<style>
.card--wrapper {
    padding-left: 15px;
    padding-right: 15px;
}

.card {
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.pull-left,
.pull-right {
    max-width: 40%;
}

.pull-left {
    margin-right: 10px;
}

input {
    
    max-width: 100%;
    display: block;
    padding: 5px 10px;
}
</style>