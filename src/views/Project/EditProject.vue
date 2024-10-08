<template>
    <div class="h-screen">
        <div class="d-flex">
            <h1 class="font-weight-light">{{ project.title }}</h1>
            <v-spacer></v-spacer>
            <v-btn 
                class="mr-4"
                variant="tonal" 
                color="warning"
                append-icon="mdi-keyboard-backspace"
                size="large"
                to="/projects"
            >Projetos</v-btn>
        </div>
        <v-divider class="mt-2 mb-10"></v-divider>

        <div class="d-flex flex-column">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field 
                        :model-value="project.title"
                        label="Título" 
                        placeholder="Digite o nome de usuário..."
                    ></v-text-field>
                </v-col>    
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-textarea
                    label="Descrição"
                    :model-value="project.description"
                    name="input-7-1"
                    variant="filled"
                    auto-grow
                    ></v-textarea>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6" md="3">
                    <v-select
                    class="mr-3"
                    label="Dificuldade"
                    variant="outlined"
                    model-value="Médio"
                    :items="['Fácil', 'Médio', 'Difícil']"
                ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field 
                        :model-value="project.createdAt"
                        label="Data Criação" 
                        placeholder="Digite o nome de usuário..."
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <v-select
                    class="mr-3"
                    label="Colaboradores"
                    variant="outlined"
                    :items="[
                        'Usuário 1', 
                        'Usuário 2', 
                        'Usuário 3'
                    ]"
                ></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <v-select
                    class="mr-3"
                    label="Tarefas"
                    variant="outlined"
                    :items="[
                        'Desenvolver Método 1', 
                        'Desenvolver Método 2', 
                        'Desenvolver Método 3'
                    ]"
                ></v-select>
                </v-col>
            </v-row>

            <v-row class="mt-10">
                <v-col>
                    <v-btn 
                        class="mr-4"
                        variant="tonal" 
                        color="primary"
                        :loading="saveLoading"
                        size="large"
                        :disabled="deleteLoading"
                        @click="save"
                    >Salvar Alterações</v-btn>
                    <v-btn 
                        variant="tonal" 
                        color="red"
                        :loading="deleteLoading"
                        size="large"
                        :disabled="saveLoading"
                        @click="deleteProject"
                    >Excluir</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue' 
import { useProjectStore } from '@/stores/ProjectStore'

const projectStore = useProjectStore()

const project = computed(() => projectStore.getProjectSelected())

let saveLoading = ref(false)
let deleteLoading = ref(false)

const save = () => {
    saveLoading.value = true

    setTimeout(() => {
        saveLoading.value = false
    }, 2000)
}

const deleteProject = () => {
    deleteLoading.value = true

    setTimeout(() => {
        deleteLoading.value = false
    }, 2000)
}
</script>