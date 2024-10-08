<template>
    <div>
        <h1 class="font-weight-light mb-6">
          <span v-if="user">Bem-vindo de volta, {{ user.nome }}!</span>
          <span v-else>Bem-vindo!</span>
        </h1>
        
     
        
        <h2 class="font-weight-light mt-10 mb-2">Projeto recentes:</h2>
        <v-divider class="mb-10"></v-divider>

        <v-row justify="center" class="mt-6 mb-10">
          <v-slide-group
            class="pa-4"
            center-active
            show-arrows
            max-width="800"
          >
            <v-slide-group-item
              v-for="project in recentProjects" :key="project.id" 
              v-ripple
            >
              <v-card 
                flat 
                v-ripple
                min-width="300"
                class="border cursor-pointer mx-3" 
              >
                <v-img 
                  class="align-end text-white border-rounded"
                  :src="project.image"
                  cover
                  
                  min-width="300"
                  max-height="220"
                  max-width="280"
                >
                  <v-card-title class="bg-black text-overline ext-medium-emphasis
                  text-wrap">{{ project.title }}</v-card-title>
                </v-img>
                
                <v-card-subtitle class="pt-3 text-wrap">
                  {{ project.userName }}
                </v-card-subtitle>

                <v-card-text>
                  <v-rating
                    :model-value="project.level"
                    color="orange-darken-2"
                    density="compact"
                    size="small"
                    readonly
                  ></v-rating>

                  <div class="mt-4">{{ project.description }}</div>
                </v-card-text>

                <v-card-text class="text-wrap">
                </v-card-text>

                <v-card-actions>
                  <v-btn variant="outlined" color="primary">Editar</v-btn>
                  <v-btn append-icon="mdi-calendar-check"  variant="tonal" color="blue">Tarefas</v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>

          <!-- <v-col 
            v-for="project in recentProjects" :key="project.id" 
            cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border cursor-pointer" v-ripple>
              <v-img 
                class="align-end text-white border-rounded"
                :src="project.image"
                cover
                max-height="220"
              >
                <v-card-title class="bg-black text-overline ext-medium-emphasis
                text-wrap">{{ project.title }}</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3 text-wrap">
                {{ project.userName }}
              </v-card-subtitle>

              <v-card-text class="text-wrap">
                <div>{{ project.description }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Editar</v-btn>
                <v-btn append-icon="mdi-calendar-check"  variant="tonal" color="blue">Tarefas</v-btn>
              </v-card-actions>
            </v-card>
          </v-col> -->
        </v-row>    

        
        <h2 class="font-weight-light mt-10 mb-2">Tarefas em andamento:</h2>
        <v-divider class="mb-10"></v-divider>

        <v-card class="mb-10">
          <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th v-for="header in taskListHeader" :key="header.key">
                            {{ header.title }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        class="cursor-pointer table-line"
                        v-ripple
                        v-for="item in taskList"
                        :key="item.id"
                    >
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.projectTitle }}</td>
                        <td>{{ item.timeConsumed }}</td>
                        <td>{{ item.startDate }}</td>
                        <td>{{ item.endDate }}</td>
                        
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
      </v-card>

      <br>
      <br>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/UserStore'

const userStore = useUserStore()

let user = computed(() => {
  let result = userStore.getUser()

  if (result) return result

  return null
}) 

let isDialogOpen = ref(false)

let values = ref([
  { mes: 'Jan', value: 12 },
  { mes: 'Fev', value: 2 },
  { mes: 'Mar', value: 10 },
  { mes: 'Abr', value: 1 },
  { mes: 'Mai', value: 20 },
  { mes: 'Jun', value: 25 },
  { mes: 'Jul', value: 12 },
  { mes: 'Ago', value: 12 },
  { mes: 'Set', value: 30 },
  { mes: 'Out', value: 50 },
  { mes: 'Nov', value: 67 },
  { mes: 'Dec', value: 34 },
])

const nomeRules = ref([
  value => {
    if (value) return true

    return 'Informe o nome.'
  },
  value => {
    if (value?.length > 2) return true

    return 'O nome de ter mais de 2 caracteres.'
  }
])

const emailRules = ref([
  value => {
    if (value) return true

    return 'O email é obrigatório'
  },
  value => {
    if (value.includes('@')) return true

    return 'Email inválido'
  }
])

let recentProjects = ref([
    {
        id: 1,
        title: 'Projeto Planejamento - AR23',
        description: 'Planejamento projetos 2024 - Outubro',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        image: 'https://images.pexels.com/photos/28518085/pexels-photo-28518085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 2 
    },
    {
        id: 2,
        title: 'Projeto Desenvolvimento - AR23',
        description: 'Desenvolvimento atividades',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        image: 'https://images.pexels.com/photos/28770118/pexels-photo-28770118/free-photo-of-futuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 4
    },
    {
        id: 3,
        title: 'Projeto Validações - AR23',
        description: 'Validações',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        image: 'https://images.pexels.com/photos/28751787/pexels-photo-28751787/free-photo-of-cena-de-rua-encantadora-em-hanoi-vietna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 3 
    },
    {
        id: 3,
        title: 'Projeto Validações - AR23',
        description: 'Validações',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        image: 'https://images.pexels.com/photos/28751787/pexels-photo-28751787/free-photo-of-cena-de-rua-encantadora-em-hanoi-vietna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 3 
    },
    {
        id: 3,
        title: 'Projeto Validações - AR23',
        description: 'Validações',
        userName: 'Eduardo',
        createdAt: '26/09/2024 9:40 PM',
        image: 'https://images.pexels.com/photos/28751787/pexels-photo-28751787/free-photo-of-cena-de-rua-encantadora-em-hanoi-vietna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 3 
    },
])

let taskList = ref([
    {
        id: 1,
        title: 'Desenvolver rota de login',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
        projectId: 1,
        projectTitle: 'Projeto Desenvolvimento - AR23',
        timeConsumed: '01:00',
        startDate: '27/09/2024 03:00',
    },
    {
        id: 2,
        title: 'Desenvolver rota de login',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
        projectId: 1,
        projectTitle: 'Projeto Desenvolvimento - AR23',
        timeConsumed: '01:00',
        startDate: '27/09/2024 03:00',
    },
    {
        id: 3,
        title: 'Desenvolver rota de login',
        description: 'Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.',
        projectId: 1,
        projectTitle: 'Projeto Desenvolvimento - AR23',
        timeConsumed: '01:00',
        startDate: '27/09/2024 03:00',
    }
])

let taskListHeader = ref([
    {
    align: 'start',
    key: 'id',
    title: 'Id',
    },
    { key: 'projectTitle', title: 'Projeto' },
    { key: 'title', title: 'Tarefa' },
    { key: 'timeConsumed', title: 'Tempo Gasto' },
    { key: 'startDate', title: 'Início' },
])

</script>