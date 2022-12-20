import { createApp } from 'vue'
import './style.css'
import VueModular from './lib/modular'
import Layout from "./components/commons/Layout.vue";
import Dashboard from "./components/Dashboard.vue";
const App = { template: '<div><router-view></router-view></div>' }

/** Modules **/
import module1 from './modules/module1'
import module2 from './modules/module2'

/**
 *
 * @type {App<Element>}
 */
const app = createApp(App)
app.use(VueModular, {
    layout: Layout,
    initialRoute: {
        name: 'dashboard',
        route: { path: '/dashboard', name: 'dashboard', component: Dashboard }
    },
    modules: [
        module1,
        module2
    ]
})
app.mount('#app')
