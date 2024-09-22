<template>
    <div class="h-screen">
        <h1>Projetos</h1>
        
        <v-divider class="my-6"></v-divider>
    
        <v-card>
            <v-row class="d-flex justify-space-between pa-4">
                <v-card-title>Lista de Projetos</v-card-title>
                <v-card-title>
                    <v-btn variant="tonal" size="small" color="secondary">Adicionar Projeto</v-btn>
                </v-card-title>
            </v-row>
    
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="projects"
                >
                    <template #item.level="{ item }">
                        <v-rating
                        :model-value="item.level"
                        color="orange-darken-2"
                        density="compact"
                        size="small"
                        readonly
                        ></v-rating>
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

import { ref } from 'vue'

let projects = ref([
    {
        id: 1,
        title: 'Projeto Validações - AR23',
        userName: 'Eduardo',
        level: 3 
    },
])
let headers = ref([
        {
        align: 'start',
        key: 'id',
        title: 'Id',
        },
        { key: 'title', title: 'Título' },
        { key: 'userName', title: 'Usuário' },
        { key: 'level', title: 'Dificuldade' },
        { key: 'actions', }
    ])

</script>