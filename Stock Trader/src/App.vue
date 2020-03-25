<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p> {{ message | reverseText }}</p>
                
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                 <p> {{ word | count-word-length }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input type="text" v-model="message">
                <input type="text" v-model="word">
                <p> {{ reverseText }}</p>
                <p> {{ countWordLength }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    // import reverseMixin from './main.js';

    //local mixin
    let reverseMixin = {
        created() {
            return this.message.split('').reverse().join('');
        }
    };
    
    export default {
        data() {
            return {
                message: '',
                word: ''
            }
        },

        filters: {
            reverseText(text) {
                return text.split('').reverse().join('');
            }
        },

        computed: {
            

            countWordLength() {
                return `${this.word} (${this.word.length})`;
            }
        },

        mixins: [reverseMixin],
    }
</script>

<style>
input {
    display: block;
    margin: 15px;
}
</style>
