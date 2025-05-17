<template>
    <div class="question-card">
        <h2>{{ questionData.question }}</h2>
        <div v-for="option in questionData.options" :key="option.code" class="option" :class="{
            'correct': showAnswer && isCorrect(option.code),
            'selected': selected.includes(option.code),
            'wrong': showAnswer && !isCorrect(option.code) && selected.includes(option.code)
        }" @click="handleSelect(option.code)">
            <span class="code">{{ option.code }}</span>
            <span class="text">{{ option.text }}</span>
        </div>
        <button v-if="questionData.type === 'multi'" @click="submitAnswer" :disabled="selected.length === 0">
            提交答案
        </button>
    </div>
</template>

<script>
export default {
    props: {
        questionData: Object
    },
    data() {
        return {
            selected: [],
            showAnswer: false
        }
    },
    methods: {
        isCorrect(code) {
            return this.questionData.answer.includes(code)
        },
        handleSelect(code) {
            if (this.questionData.type === 'single') {
                this.selected = [code]
                this.showAnswer = true
            } else {
                const index = this.selected.indexOf(code)
                index === -1
                    ? this.selected.push(code)
                    : this.selected.splice(index, 1)
            }
        },
        submitAnswer() {
            this.showAnswer = true
        }
    }
}
</script>

<style scoped>
.question-card {
    padding: 20px;
}

.option {
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: all 0.2s;
}

.option.selected {
    background-color: #e8f4ff;
}

.correct {
    background-color: #4CAF50 !important;
}

.wrong {
    background-color: #ff5252 !important;
}

button {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 4px;
}
</style>