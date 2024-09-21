<template>
    <div class="h-screen">
        <h1>Usuários</h1>
        
        <v-divider class="my-6"></v-divider>
    
        <v-card>
            <v-card-title>Lista de Usuários</v-card-title>
    
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                ></v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>

import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()

let users = userStore.getListaUsuarios()
let headers = userStore.getListaUsuariosHeader()

</script>