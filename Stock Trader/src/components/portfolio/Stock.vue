<template>
    <div class="card--wrapper col-sm-6 col-md-4">
      <div class="card col">
          <h3 class="card-title">
              {{ stock.name }}
              <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
          </h3>
          <div class="input-group justify-content-between">
              <div class="pull-left">
                  <input 
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{danger: excessQuantity}"
                  >
              </div>
              <div class="pull-right">
                  <button 
                  class="btn btn-success"
                  @click="sellStock"
                  :disabled="excessQuantity || +quantity <= 0 || !Number.isInteger(+quantity)"
                  >{{ excessQuantity ? 'Not enough stocks' : 'Sell'}}</button>
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
      excessQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },

    methods: {
        sellStock() {
         
          const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity,
            };
            //дергаем action sellStock (передавая ему сток, который продаем).
            //Экшн в свою очередь коммитит мутацию SELL_STOCK из модуля portfolio
            //(экшн и мутация находятся в одном модуле portfolio)
            this.$store.dispatch('sellStock', order);
            this.quantity = 0;
        }
        
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
</template>