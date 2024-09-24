import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
    let listaMenu = ref([
        {
            id: 1,
            title: 'Home',
            route: '/',
            icon: 'mdi-home'
        },
        {
            id: 2,
            title: 'Projetos',
            route: '/projects',
            icon: 'mdi-email'
        },
        {
            id: 3,
            title: 'Tarefas',
            route: '',
            icon: 'mdi-check-outline'
        },
        {
            id: 4,
            title: 'Overview',
            icon: 'mdi-monitor-dashboard',
            subMenu: [
                {
                    id: 5,
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard-edit-outline'
                },
                {
                    id: 6,
                    title: 'Faturamento',
                    icon: 'mdi-currency-usd'
                },
                {
                    id: 7,
                    title: 'Relatório',
                    icon: 'mdi-chart-line'
                },
            ]
        },
    ])

    let listaMenuAdmin = ref([
        {
            id: 8,
            title: 'Usuários',
            route: '/users',
            icon: 'mdi-account'
        },
        {
            id: 9,
            title: 'Sistema',
            route: '',
            icon: 'mdi-cog'
        },
    ])

    const getListaMenu = () => listaMenu.value
    const getListaMenuAdmin = () => listaMenuAdmin.value

    return {
        getListaMenu,
        getListaMenuAdmin
    }

})