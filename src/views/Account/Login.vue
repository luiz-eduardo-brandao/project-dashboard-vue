<template>  
    <v-row justify="center" class="mt-10 pt-10">
        <v-card width="700" class="pa-5">
            <v-row justify="center">
                <v-card-title>Faça Login!</v-card-title>
            </v-row>
    
            <v-card-text class="mt-4">
                <v-text-field 
                    label="Username" 
                    placeholder="nome do usuário..."
                    :rules="usernameRules"
                ></v-text-field>
                <v-text-field 
                    label="Senha" 
                    placeholder="digite a senha..."
                    type="password"
                    :rules="passwordRules"
                ></v-text-field>
            </v-card-text>
    
            <v-row justify="center" class="my-6">
                <a href="/registerAccount">Esqueceu a senha?</a>
            </v-row>
    
            <v-card-actions>
                <v-row justify="center" class="mx-4">
                    <v-btn 
                        variant="tonal" 
                        block 
                        color="warning"
                        :loading="loginLoading"
                        @click="login"
                    >Login</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/UserStore'

const router = useRouter()
const callRoute = (routeName) => router.push(routeName)

const userStore = useUserStore()

let loginLoading = ref(false)

const login = () => {
    loginLoading.value = true

    let user = {
        id: 1,
        nome: 'Edu',
        email: 'edu@gmail.com',
        role: 'Admin',
    }

    setTimeout(() => {
        userStore.setUser(user)
        callRoute('/')
        loginLoading.value = false       
    }, 2000)
}

const usernameRules = ref([
    value => {
        if (value) return true

        return 'Campo obrigatório'
    }
])

const passwordRules = ref([
    value => {
        if (value) return true

        return 'Campo obrigatório'
    },
    value => {
        if (value?.length < 3) return 'Senha inválida'

        return true
    }
])

</script>