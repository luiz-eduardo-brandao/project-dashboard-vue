<template>
    <div class="h-screen">
        <h1>Projetos</h1>
        
        <v-divider class="my-6"></v-divider>

        <TimeLine 
            :isTimelineOpen="isTimelineOpen"
            :projectTimeline="projectTimeline"
            @close="closeTimeline()"   
        />

        <FormProject 
            :isOpen="isFormProjectOpen"
            :label="labelFormProject"
            @close="isFormProjectOpen = !isFormProjectOpen"
        />

        <v-card>
            <v-row class="d-flex justify-space-between pa-4">
                <v-card-title>Lista de Projetos</v-card-title>
                <v-card-title>
                    <v-btn 
                        @click="openProjectForm('Adicionar Projeto', null)"
                        variant="tonal" 
                        color="primary"
                    >Novo Projeto</v-btn>
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

                    <template #item.tasks="{ item }">
                        <v-btn 
                        variant="tonal" 
                        size="small" 
                        color="primary"
                        to="/tasks"
                        >
                            Ir para Tarefas =>
                        </v-btn>
                    </template>

                    <template #item.actions="{ item }">
                        <v-btn 
                            icon="mdi-pencil"
                            color="primary"
                            class="rounded-7 ma-2"
                            variant="text"
                            @click="openProjectForm('Editar Projeto', item)"
                        ></v-btn>
                        <v-btn 
                            icon="mdi-history"
                            color="primary"
                            class="rounded-7 ma-2"
                            variant="text"
                            @click="openTimeline(item)"
                        ></v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TimeLine from '@/components/TimeLine.vue'
import FormProject from '@/components/project/FormProject.vue'

let isTimelineOpen = ref(false)
let projectTimeline = ref([])

let isFormProjectOpen = ref(false)
let labelFormProject = ref('')

const openProjectForm = (label, project) => {

    labelFormProject.value = label

    if (project != null) {

    }

    isFormProjectOpen.value = !isFormProjectOpen.value
}

const openTimeline = (project) => {
    console.log('get project timeline by id: ', project.id)

    projectTimeline.value = [
        {
            id: 1,
            projectId: project.id,
            date: '20/09/2024',
            hour: '10:00',
            action: 'Inclusão',
            title: project.title
        },
        {
            id: 2,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:22',
            action: 'Alteração',
            title: project.title
        },
        {
            id: 3,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:48',
            action: 'Alteração',
            title: project.title
        },
        {
            id: 3,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:48',
            action: 'Alteração',
            title: project.title
        },
        {
            id: 3,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:48',
            action: 'Alteração',
            title: project.title
        },
        {
            id: 3,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:48',
            action: 'Alteração',
            title: project.title
        },
        {
            id: 3,
            projectId: project.id,
            date: '21/09/2024',
            hour: '9:48',
            action: 'Alteração',
            title: project.title
        },
    ]

    isTimelineOpen.value = !isTimelineOpen.value
}

const closeTimeline = () => {
    isTimelineOpen.value = !isTimelineOpen.value

    projectTimeline.value = []
}

let projects = ref([
    {
        id: 1,
        title: 'Projeto Planejamento - AR23',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        level: 2 
    },
    {
        id: 2,
        title: 'Projeto Desenvolvimento - AR23',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        level: 4
    },
    {
        id: 3,
        title: 'Projeto Validações - AR23',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
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
        { key: 'createdAt', title: 'Data Criação' },
        { key: 'level', title: 'Dificuldade' },
        { key: 'tasks', },
        { key: 'actions' }
    ])

</script>