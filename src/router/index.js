// Import router and components to route
import {createRouter, createWebHistory} from 'vue-router'
import PageHome from "@/pages/PageHome"
import PageThreadShow from "@/pages/PageThreadShow";
import PageNotFound from "../pages/PageNotFound";
import sourceData from '@/data.json'

// Define routes
const routes = [
    {path: '/', name: 'Home', component: PageHome},
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if exists continue
            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    // Preserve URL, query and hash
                    params: {pathMatch: to.path.substring(1).split('/')},
                    query: to.query,
                    hash: to.hash
                })
            }
            // else redirect to not found
        }
    },
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound},
]

// Export route configuration and routes
export default createRouter({
    history: createWebHistory(),
    routes
})