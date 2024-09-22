import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

import Login from '../views/Account/Login.vue'
import RegisterAccount from '../views/Account/RegisterAccount.vue'

import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import Projects from '../views/Projects.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,  
            meta: {
                authorize: true
            }
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
            meta: {
                authorize: true
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                authorize: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                authorize: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registerAccount',
            name: 'registerAccount',
            component: RegisterAccount
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta?.authorize) {
        const userStore = useUserStore()

        if (userStore.getIsAuthenticated()) {
            console.log('authorized')

            // const isTokenValid = userAuth.checkToken();
            const isTokenValid = true;
        
            if (isTokenValid)
                next();
                return
        }

        console.log('rejected')
        
        next({ name: 'login'})
        return
    }
    
    next();
})

export default router