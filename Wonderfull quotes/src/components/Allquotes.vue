<template>
<div class="all-quotes-section">
    <div class="row">
        <app-quoteitem
            :key="quote"
            v-for="(quote, index) in QuotesArr"
            @click.native="deleteQuote(index)"
        >
        <div class="quote-item--inner"> 
        {{ quote.text }}
        </div></app-quoteitem>
    </div>
    
</div>
    
</template>

<script>

import  newQuote from './Singlequote.vue';
import { eventBus } from '../main.js';
export default {
    
    data: function () {
        return {
            QuotesArr: [],
         }
    },

   components: {
       'app-quoteitem': newQuote,
   },

   methods: {
      deleteQuote(index) {
         this.QuotesArr.splice(index, 1);
         eventBus.$emit('quoteWasDeleted', this.QuotesArr.length);
      }
   },

   created() {
       eventBus.$on('newQuoteWasCreated', (data) => {
            this.QuotesArr.push(data);
            eventBus.$emit('newQuoteWasAdded', this.QuotesArr.length);
       });
   },
}


</script>  
<style scoped>
.all-quotes-section {
    margin-bottom: 20px;
}

.quote-item--inner {
    font-size: 22px;
    border: 1px solid #ccc;
    padding: 15px 20px;
    font-family: 'Arizonia', sans-serif;
    line-height: 26px;
}


</style>