<template>
    <div class="answer-wrapper alert alert-danger">
        <h2>That is wrong</h2>
        <hr>
        <button
            class="btn btn-primary"
            @click="$emit('GoToNextQuestion', 'app-question')"
        >Back</button>
    </div>
</template>

<script>
  
</script>

<style scoped>
.answer-wrapper {
    min-height: 190px;
    border-radius: 3px;
    text-align: center;
}
</style>