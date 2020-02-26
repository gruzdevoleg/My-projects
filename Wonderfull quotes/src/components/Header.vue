<template>
<header>
    <div class="header--wrapper">
        <h2>Quotes Added</h2>
        <div class="progress-bar">
            <div 
            class="progress-bar--inner"
            :style="{ width: addedQuotesQuantity*100/10 + '%'}"
            ><span>{{ addedQuotesQuantity }}/10</span></div>
            
        </div>
    </div>
</header>
   
</template>
<script>
import { eventBus } from '../main.js'
export default {
    data: function() {
        return {
            addedQuotesQuantity: 0
        }
    },

    created() {
       eventBus.$on('newQuoteWasAdded', (data) => {
           if (data > 10) {
               alert('No more quotes');
               return;
           }
           this.addedQuotesQuantity = data;
       });

       eventBus.$on('quoteWasDeleted', (data) => {
           this.addedQuotesQuantity = data;
       });
   },
}
</script>
<style scoped>
header {
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
}

.progress-bar {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 20px;
    overflow: hidden;
    text-align: center;
    float: none;
    width: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    -webkit-box-shadow:  0 1px 10px rgba(0,0,0,.15);
    box-shadow:  0 1px 10px rgba(0,0,0,.15);
    background-color: #fff;
 }

.progress-bar--inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color:  #337ab7;
     -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
}

.progress-bar--inner>span {
    display: inline-block;
    height: 100%;
   
}


</style>