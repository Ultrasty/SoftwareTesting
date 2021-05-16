import Vue from 'vue';
import VueRouter from "vue-router";
import Main from '../components/main'
import question1 from "../components/question/question1";
import question2 from "../components/question/question2";
import question3 from "../components/question/question3";
import question4 from "../components/question/question4";
import test from "../components/test"
import welcome from "../components/welcome";
Vue.use(VueRouter)
Vue.use(Main)

export default new VueRouter({
        routes: [
            {
                path: '/component',
                name: 'component',
                component: test
            },
            {
                path: '/',
                name: 'main',
                component: Main,
                children: [
                    {
                        path: '',
                        component: welcome
                    },
                    {
                        path: 'question1',
                        component: question1
                    },
                    {
                        path: 'question2',
                        component: question2
                    },
                    {
                        path: 'question3',
                        component: question3
                    },
                    {
                        path: 'question4',
                        component: question4
                    }

                ]
            }
        ]
    }
)
