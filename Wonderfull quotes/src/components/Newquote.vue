<template>
<div class="newquote-section">
    <div class="newquote--wrapper">
        <h4>Quote</h4>
        <form action="#">
            <textarea name="quote-text" id="quoteText" rows="10"></textarea>
        </form>
        <button @click="addNewQuote">Add Quote</button>
    </div>
</div>
    
</template>

<script>
import { eventBus } from '../main.js';
export default {
    data: function() {
        return {
            newQuote: {
                id: '',
                text: '',
            },
        }
    },

    methods: {
        addNewQuote() {
            if (!document.getElementById("quoteText").value) return;
            this.newQuote = {
                id: '',
                text: document.getElementById("quoteText").value,
            };
            eventBus.$emit('newQuoteWasCreated', this.newQuote);
            document.getElementById("quoteText").value = '';
         }
    }

   
}


</script>  
<style scoped>
.newquote-section {
    margin-bottom: 20px;
}

.newquote--wrapper {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
}

h4 {
    font-size: 18px;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 10px;
}

textarea {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    margin-bottom: 20px;
}

textarea:focus,
button:focus {
    outline: none;
}

button {
    min-width: 120px;
    display: block;
    max-width: 120px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    background-color:  #337ab7;
    text-align: center;
    padding: 10px;
    color: #fff;
    line-height: 1;
    border: none;
    border-radius: 5px;
}
</style>