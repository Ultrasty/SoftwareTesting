import Vue from 'vue';
import VueRouter from "vue-router";
import Content from '../components/conponent'
import Main from '../components/main'
import question1 from "../components/question/question1";
import question2 from "../components/question/question2";
Vue.use(VueRouter)
Vue.use(Main)

export default new VueRouter({
        routes: [
            {
                path: '/content',
                name: 'component',
                component: Content
            },
            {
                path: '/',
                name: 'main',
                component: Main,
                children: [
                    {
                        path: 'question1',
                        component: question1
                    },
                    {
                        path: 'question2',
                        component: question2
                    }
                ]
            }
        ]
    }
)
