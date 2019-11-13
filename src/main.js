import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/csms.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue'
import CreateComponent from './components/CreateComponent.vue'
import IndexComponent from './components/IndexComponent.vue'
import EditComponent from './components/EditComponent.vue'
import EditorComponent from './components/EditorComponent'

// VueRouter에 등록할 router를 배열로 설정
// path url로 접근시 해당 컴포넌트로 접근
const routes = [
  {
    name: 'home',
    path: '/',
    components: {
      default : HomeComponent,
      Editor: EditorComponent
    }
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/',
    component: EditComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue(Vue.util.extend({router}, App, HomeComponent)).$mount('#app')
