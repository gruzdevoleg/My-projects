<template>
    <div>
        <h1>The Super Quiz</h1>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                    <transition name="fade" mode="out-in">
                        <components 
                        :is="selectedCompopnent"
                        :totalAskedQuestions="questionsCounter"
                        @NextQuestion="questionsCounter=$event"
                        ></components>
                    </transition>
                    <h3>{{ questionsCounter }}/10</h3>
                    
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
               selectedCompopnent: 'app-question',
               questionsCounter: 0
            }
        },

        components: {
            appQuestion: Question,
            appAnswer: Answer,
        },

        

       
        methods: {
            
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
