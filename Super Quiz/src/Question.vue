<template>
    <div class="question-wrapper">
        <h4 v-if="currentQuestionNumber<questions.length">{{ questions[currentQuestionNumber].question }}</h4>
        
        <div class="content" v-if="currentQuestionNumber<questions.length">
            <button
                class="choice-box btn btn-primary"
                :key="variant"
                v-for="(variant) in questions[currentQuestionNumber].variants"
                @click="checkAnswer(variant)"
            >{{ variant }}</button>
        </div>
        
    </div>
</template>

<script>
   
    export default {
        props: {
            totalAskedQuestions: Number,
            
        },

        data() {
            return {
                currentQuestionNumber: this.totalAskedQuestions,
                checkResult: false,
                questions: [
                    {
                        question: 'What is 10 + 15?',
                        variants: [30, 25, 45, 50],
                    },
                    {
                        question: 'What is 50 - 5?',
                        variants: [30, 25, 45, 50],
                    },
                    {
                        question: 'What is 25 + 25?',
                        variants: [30, 25, 45, 50],
                    },
                    {
                        question: 'What is 60 - 30?',
                        variants: [30, 25, 45, 50],
                    }
                ]
            }
        },

        methods: {
            // StartNewQuiz() {
            //     this.currentQuestionNumber = 0;
            //     this.$emit('StartNewQuiz');
            // },

            checkAnswer(selectedAnswer) {
                if (this.currentQuestionNumber === this.questions.length) 
                    return;
                let currentQuestion = this.questions[this.currentQuestionNumber]; 
                let questionStrToArr = currentQuestion.question.slice(0, currentQuestion.question.length - 1).split(' ');
                let numbersArr = [];
                let result = 0;
                questionStrToArr.forEach((element, index, arr) => {
                    if (parseInt(element)) {
                        (arr[index-1] && arr[index-1] === '-') ? result -= Number(element) : result += Number(element);
                        }
                });

                if (result === selectedAnswer) {
                    this.checkResult = true;
                    //this.currentQuestionNumber++;
                } 
                 
                this.$emit('checkAnswer', { totalQuestions: this.questions.length,
                                            checkResult: this.checkResult,
                                            //totalRightQuestions:  this.currentQuestionNumber
                                        });
                                
             }
        },

    }
</script>

<style scoped>
    .question-wrapper {
        border: 1px solid lightgray;
        border-radius: 3px;
        text-align: center;
    }

    h4 {
        font-size: 18px;
        padding: 15px 10px;
        margin-top: 0;
        margin-bottom: 0;
        background-color: #ccc;
        border-bottom: 1px solid lightgray;
    }

    .content {
        min-width: 80%;
        margin: 25px auto;
    }

    .choice-box {
        min-width: 35px;
        min-height: 35px;
        color: #fff;
        font-size: 22px;
        padding: 8px;
        margin: 20px;
     }

    .start {
        margin: 20px 0;
    }
</style>