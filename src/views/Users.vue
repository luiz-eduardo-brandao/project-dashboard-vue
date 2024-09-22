<template>
    <div class="h-screen">
        <h1>Usuários</h1>
        
        <v-divider class="my-6"></v-divider>
    
        <v-card>
            <v-row class="d-flex justify-space-between pa-4">
                <v-card-title>Lista de Usuários</v-card-title>
                <v-card-title>
                    <v-btn variant="tonal" size="small" color="warning">Adicionar Usuário</v-btn>
                </v-card-title>
            </v-row>
    
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                >
                    <template #item.role="{ item }">
                        <v-chip 
                            :color="getColor(item.role)"
                            variant="outlined" 
                            size="small"
                        >
                            {{ item.role }}
                        </v-chip>
                    </template>
                    
                    <template #item.actions="{ item }">
                        <v-btn 
                            icon="mdi-pencil"
                            color="primary"
                            class="rounded-7 ma-2"
                            variant="text"
                        ></v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>

import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()

let users = userStore.getListaUsuarios()
let headers = userStore.getListaUsuariosHeader()

const getColor = (role) => {
    if (!role) return ''

    if (role == 'Admin') return 'primary'
    if (role == 'Gerente') return 'green'
}

</script>