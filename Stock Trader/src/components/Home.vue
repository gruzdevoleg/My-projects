<template>
    <div>
      <h1>Trade or view your portfolio</h1>
      <h6>You may save or load your data</h6>
      <h6>Click on 'End day' to begin na new day!</h6>
      <hr>
      
    </div>
    
</template>
<script>


export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
}
</script>
