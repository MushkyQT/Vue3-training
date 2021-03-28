// Import router and components to route
import {createRouter, createWebHistory} from 'vue-router'
import PageHome from "@/components/PageHome"
import PageThreadShow from "@/components/PageThreadShow";

// Define routes
const routes = [
    {path: '/', name: 'Home', component: PageHome},
    {path: '/thread/:id', name: 'ThreadShow', component: PageThreadShow, props: true},
]

// Export route configuration and routes
export default createRouter({
    history: createWebHistory(),
    routes
})