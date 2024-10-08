import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
    //state
    let listType = ref(false)
    let taskSelected = ref(null)

    //actions
    const setListType = () => listType.value = !listType.value
    
    const setTaskSelected = (payload) => {
        taskSelected.value = payload
    }

    // getters
    const getTaskSelected = () => taskSelected.value
    const getListType = () => listType.value


    return {
        getListType,
        setTaskSelected,
        setListType,
        getTaskSelected
    }

})