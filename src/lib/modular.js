import { createRouter, createWebHistory } from 'vue-router'

/** Pour TEST */
const Home = { template: '<div class="text-3xl font-bold underline">Home</div>' }
const About = { template: '<div class="text-3xl font-bold underline">About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]



export default {  
    install: (app, options) => {
        if(options.initialRoute && options.layout) {

            let routes = [
                {
                    path: '/',
                    name: 'root',
                    component: options.layout,
                    redirect: options.initialRoute.name,
                    children: [
                        options.initialRoute.route
                        /*{ path: '/dashboard', name: 'dashboard', component: Dashboard }*/
                    ]
                }
            ]

            options.modules.forEach(module => {
                module.router.routes.forEach(route => {
                    routes.at(0).children.push(route)
                })
            })

            const router = createRouter({
                history: createWebHistory(),
                routes
            })
            app.use(router)
        }

        /**
        const router = createRouter({
            // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
            history: createWebHistory(),
            routes, // short for `routes: routes`
        })
        app.use(router)
         */
    }
}
