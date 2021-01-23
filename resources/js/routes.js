import VueRouter from 'vue-router';
import Home from './components/pages/Home';
import Abc from './components/ExampleComponent';


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    // {
    //     path: '/hoge2',
    //     component: hoge2,
    //     name: 'hoge2'
    // },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

export default router;