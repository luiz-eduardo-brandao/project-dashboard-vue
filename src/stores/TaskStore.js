import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
    let listType = ref(false)

    const setListType = () => listType.value = !listType.value
    const getListType = () => listType.value

    return {
        getListType,
        setListType
    }

})