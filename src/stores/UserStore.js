import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    let user = ref(null)
    
    let isAuthenticated = ref(false)

    let listaUsuarios = ref([
        {
            id: 1,
            nome: 'Edu',
            email: 'edu@gmail.com',
            role: 'Admin'
        },
        {
            id: 2,
            nome: 'Carlos',
            email: 'carlos@gmail.com',
            role: 'Gerente'
        },
        {
            id: 3,
            nome: 'Alex',
            email: 'alex@gmail.com',
            role: 'Convidado'
        },
        {
            id: 4,
            nome: 'Ferreira',
            email: 'ferreira@gmail.com',
            role: 'Convidado'
        }
    ])

    let listaUsuariosHeader = ref([
        {
        align: 'start',
        key: 'id',
        title: 'Id',
        },
        { key: 'nome', title: 'Nome' },
        { key: 'email', title: 'Email' },
        { key: 'role', title: 'Cargo' },
        { key: 'actions', }
    ])

    const setUser = (newUser) => {
        if (newUser == null)
            throw 'Usuário inválido'

        console.log('setUser', newUser)

        user.value = newUser
        isAuthenticated.value = true
    }   

    const logout = () => {
        
        console.log('logout')

        user.value = null
        isAuthenticated.value = false
    }   

    const adicionarUsuario = async (user) => {
        if (user == null)
            throw 'Usuário inválido'

        await listaUsuarios.value.push(user)

        return listaUsuarios.value;
    }

    const getListaUsuarios = () => listaUsuarios.value
    const getListaUsuariosHeader = () => listaUsuariosHeader.value
    const getUser = () => user.value
    const getIsAuthenticated = () => isAuthenticated.value

    return {
        getListaUsuarios,
        getListaUsuariosHeader,
        adicionarUsuario,
        getUser,
        getIsAuthenticated,
        setUser,
        logout
    }
})