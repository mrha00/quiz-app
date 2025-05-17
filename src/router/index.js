import { createRouter, createWebHistory } from 'vue-router'
import QuestionCard from '../components/QuestionCard.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: QuestionCard,
            props: {
                questionData: {
                    question: '默认题目',
                    type: 'single',
                    options: [
                        { code: 'A', text: '默认选项A' },
                        { code: 'B', text: '默认选项B' }
                    ],
                    answer: ['A']
                }
            }
        }
    ]
})