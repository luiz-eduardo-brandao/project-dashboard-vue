import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
    //state
    let projectSelected = ref(null)

    //actions
    const setProjectSelected = (payload) => {
        projectSelected.value = payload
    }

    // getters
    const getProjectSelected = () => projectSelected.value

    return {
        setProjectSelected,
        getProjectSelected
    }
})