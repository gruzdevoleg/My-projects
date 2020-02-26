<template>
    <div class="quote-item col-12 col-sm-6 col-md-4 col-lg-3">
    
        <slot></slot>
    </div>
</template>

<script>
export default {
 }
</script>
<style scoped>
.quote-item {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    cursor: pointer;
}

.quote-item:hover .quote-item--inner {
    background-color: #ED6274;
}

</style>