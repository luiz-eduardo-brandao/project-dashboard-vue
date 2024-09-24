<template>
    <div class="h-screen">
        <h1>Projetos</h1>
        
        <v-divider class="my-6"></v-divider>
    
        <v-dialog 
            v-model="isDialogOpen"
            max-width="900"
            class="rounded-md border"
        >
            <v-card>
                <v-card-title class="mt-2">
                    <span class="font-weight-light text-grey text-h6">Timeline: { titulo }</span>
                </v-card-title>
                <v-card-text>
                    <v-timeline align="start" side="end">
                        <v-timeline-item
                            size="small"
                        >
                        <div class="d-flex font-weight-light">
                            <div class="d-flex flex-column ">
                                <span class="me-4">23/09/2024</span>
                                <span class="me-4 font-weight-light">01:24</span>
                            </div>
                            <div>
                            <strong>Projeto Criado</strong>
                            <div class="text-caption">
                                Projeto Validações - AR2024
                            </div>
                            </div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item
                            dot-color="blue"
                            size="small"
                        >
                            <div class="d-flex font-weight-light">
                                <div class="d-flex flex-column">
                                    <span class="me-4">23/09/2024</span>
                                    <span class="me-4 font-weight-light">02:20</span>
                                </div>
                                <div>
                                <strong>Alteração</strong>
                                <div class="text-caption">
                                    Projeto Validações - AR2024
                                </div>
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item
                        dot-color="pink"
                        size="small"
                        >
                        <div class="d-flex font-weight-light">
                            <div class="d-flex flex-column">
                                    <span class="me-4">23/09/2024</span>
                                    <span class="me-4 font-weight-light">02:20</span>
                                </div>
                                <div>
                                <strong>Tarefa Adicionada</strong>
                                <div class="text-caption">
                                    Tarefa #1 - Desenvolver item 1
                                </div>
                            </div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item
                        dot-color="pink"
                        size="small"
                        >
                        <div class="d-flex font-weight-light">
                            <div class="d-flex flex-column">
                                    <span class="me-4">23/09/2024</span>
                                    <span class="me-4 font-weight-light">02:20</span>
                                </div>
                                <div>
                                <strong>Tarefa Adicionada</strong>
                                <div class="text-caption">
                                    Tarefa #2 - Desenvolver item 1
                                </div>
                            </div>
                        </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
                <v-card-actions>
                    <v-btn 
                        color="secondary" 
                        variant="tonal" 
                        @click="isDialogOpen = !isDialogOpen"
                        class="ma-3"
                    >Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card>
            <v-row class="d-flex justify-space-between pa-4">
                <v-card-title>Lista de Projetos</v-card-title>
                <v-card-title>
                    <v-btn 
                        @click="isDialogOpen = !isDialogOpen"
                        variant="tonal" 
                        size="small" 
                        color="secondary"
                    >Adicionar Projeto</v-btn>
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

let isDialogOpen = ref(false)

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