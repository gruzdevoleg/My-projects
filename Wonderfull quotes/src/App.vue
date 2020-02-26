<template>
    <div class="container">
        <app-header></app-header>
        <app-newquote></app-newquote>
        <app-allquotes></app-allquotes>
        <div class="info"> Info: {{ infoMessage }}</div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Newquote from './components/Newquote.vue';
    import Allquotes from './components/Allquotes.vue';

    export default {
        data: function() {
            return {
                infoMessage: 'Click on a Quote to delete it',
            }
        },
        components: {
            appHeader: Header,
            appNewquote: Newquote,
            appAllquotes: Allquotes
        }
    }
</script>

<style scoped>
.info {
    background-color: #CAE4ED;
    padding: 15px;
    text-align: center;
    font-size: 16px;

}
</style>
