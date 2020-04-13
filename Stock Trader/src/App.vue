<template>
    <div class="page-wrapper">
        <app-header></app-header>
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <router-view></router-view>
                    </div> 
                </div>
            </div>
        </div>
        
       
    </div>
</template>

<script>

    export default {
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>
 <style lang="scss">

 </style>

    
