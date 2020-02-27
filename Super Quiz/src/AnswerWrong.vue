<template>
    <div class="answer-wrapper alert alert-danger">
        <h2>That is wrong</h2>
        <hr>
        <button
            class="btn btn-primary"
            @click="totalAskedQuestions !== totalQuestionsQuantity -1 ? $emit('GoToNextQuestion', 'app-question') : $emit('StartNewQuiz', 'app-question')"
        >{{ totalAskedQuestions !== totalQuestionsQuantity - 1 ? 'Next question' : 'Start new Quiz!' }}</button>
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