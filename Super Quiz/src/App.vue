<template>
    <div>
        <h1>The Super Quiz</h1>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <transition name="fade" mode="out-in">
                        <components 
                        :is="selectedComponent"
                        :totalAskedQuestions="questionsCounter"
                         @NextQuestion="showAnswerResult"
                        ></components>
                    </transition>
                    <h3>{{ questionsCounter }}/4</h3>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './Question.vue';
    import Answer from './Answer.vue';
   
    export default {
        data() {
            return {
               selectedComponent: 'app-question',
               questionsCounter: 0
            }
        },

        components: {
            appQuestion: Question,
            appAnswer: Answer,
        },
      
        methods: {

            showAnswerResult($event) {
                this.questionsCounter=$event.currentQuestionNumber;
                this.selectedComponent = $event.checkResult ? 'app-answer' : 'app-question';
            }
            
            // beforeEnter(el) {
               
            // },
            // enter(el, done) {
                               
            // },
            // afterEnter(el) {
                
            // },
            // enterCancelled(el) {
                
            // },

            // beforeLeave(el) {
                
            // },
            // leave(el, done) {
                
            // },
            // afterLeave(el) {
                
            // },
            // leaveCancelled(el) {
                
            // }
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
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

.slide-move {
    transition: transform 1s
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}

</style>
