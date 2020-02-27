<template>
    <div class="answer-wrapper alert alert-success">
        <h2>That is right</h2>
        <hr>
        <button
            class="btn btn-primary"
            @click="totalAskedQuestions !== totalQuestionsQuantity ? $emit('GoToNextQuestion', 'app-question') : $emit('StartNewQuiz', 'app-question')"
        >{{ totalAskedQuestions !== totalQuestionsQuantity ? 'Next question' : 'Start new Quiz!' }}</button>
    </div>
</template>

<script>
  export default {
      props: {
          totalQuestionsQuantity: Number,
          totalAskedQuestions: Number
      },
  }
</script>

<style scoped>
.answer-wrapper {
    min-height: 190px;
    border-radius: 3px;
    text-align: center;
}
</style>