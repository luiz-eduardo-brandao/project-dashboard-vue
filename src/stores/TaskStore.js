import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
    //state
    let listType = ref(false)
    let taskSelected = ref(null)

    let taskList = ref([
        {
            id: 1,
            title: 'Desenvolver rota de login',
            description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
            projectId: 1,
            projectTitle: 'Projeto Desenvolvimento - AR23',
            timeConsumed: '05:00',
            startDate: '27/09/2024 03:00',
        },
        {
            id: 2,
            title: 'Desenvolver tela de cadastro de usuários',
            description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
            projectId: 1,
            projectTitle: 'Projeto Desenvolvimento - AR23',
            timeConsumed: '03:00',
            startDate: '27/09/2024 03:00',
        },
        {
            id: 3,
            title: 'Otimizar consulta de tarefas',
            description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
            projectId: 1,
            projectTitle: 'Projeto Desenvolvimento | Etapa 2',
            timeConsumed: '08:00',
            startDate: '14/10/2024 03:00',
            endDate: '15/10/2024 03:00'
        }
    ])

    //actions
    const setListType = () => listType.value = !listType.value
    
    const setTaskSelected = (payload) => {
        taskSelected.value = payload
    }

    // getters
    const getTaskSelected = () => taskSelected.value
    const getListType = () => listType.value
    const getTasksList = () => taskList.value


    return {
        getListType,
        setTaskSelected,
        setListType,
        getTaskSelected,
        getTasksList
    }

})