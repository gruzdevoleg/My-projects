<template>
    <div>
        <h1>The Super Quiz</h1>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <transition name="flip" mode="out-in">
                        
                        <component

                        :is="selectedComponent"
                        :totalQuestionsQuantity="totalQuestions"
                        :totalAskedQuestions="totalRightQuestions"
                         @GoToNextQuestion="showNextQuestion"
                         @checkAnswer="nextStep"
                         @StartNewQuiz="startNewQuiz"
                        ></component>
                        
                    </transition>
                    <h3>{{ totalRightQuestions }}/{{ totalQuestions }}</h3>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './Question.vue';
    import AnswerRight from './AnswerRight.vue';
    import AnswerWrong from './AnswerWrong.vue';
   
    export default {
        data() {
            return {
               selectedComponent: 'app-question',
               totalRightQuestions: 0,
               totalQuestions: 4
            }
        },

        components: {
            appQuestion: Question,
            appAnswerRight: AnswerRight,
            appAnswerWrong: AnswerWrong
        },
      
        methods: {

            showNextQuestion($event) {
                this.selectedComponent = $event;
             },

            nextStep($event) {
                this.totalQuestions = $event.totalQuestions;
                this.totalRightQuestions = $event.totalRightQuestions;
                this.selectedComponent = $event.checkResult ? 'app-answer-right' : 'app-answer-wrong';
                
            },

            startNewQuiz($event) {
                this.totalRightQuestions = 0;
                this.selectedComponent = $event;
            }
        }

       
    }
</script>

<style>
h1 {
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
}
.flip-enter {
    /* transform: rotateY(0); */
}
.flip-enter-active {
    animation: flip-in .5s ease-out forwards; /*forwards stops an animated element in the end position, 
    and doesn't retriev it to initial state*/
}

.flip-leave {
    /* transform: rotateY(0); */
}

.flip-leave-active {
     animation: flip-out .5s ease-out forwards
}


@keyframes flip-in {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0);
    }
}

@keyframes flip-out {
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(90deg);
    }
}

</style>
