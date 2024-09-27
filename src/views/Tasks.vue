<template>
    <div class="h-screen">
        <h1 class="font-weight-light">Suas Tarefas!</h1>
        
        <v-divider class="my-6"></v-divider>
        
        <v-container>
            <v-row class="">
                <v-text-field 
                    class="px-3 mx-2"
                    label="Pesquisar"
                    variant="outlined"
                ></v-text-field>
                <v-select
                    class="mr-3"
                    label="Projetos"
                    variant="outlined"
                    :items="['Fácil', 'Médio', 'Difícil']"
                ></v-select>
            
                <v-btn icon="mdi-magnify" class="mx-2"></v-btn>

                <v-spacer></v-spacer>
                <div class="d-flex justify-center ">
                    <v-btn align="center"
                        class="mt-2 mr-3"
                        variant="tonal" 
                        color="primary"
                    >
                        Nova Tarefa <v-icon  class="ml-2" icon="mdi-plus"></v-icon>
                    </v-btn>
                    <div class="d-flex justify-center flex-column mx-4 text-subtitle-2 font-weight-light">
                        <v-switch 
                            v-model="listType"
                            theme="light"
                            color="purple-darken-2"
                            base-color="blue"
                            false-icon="mdi-view-dashboard"
                            true-icon="mdi-format-list-bulleted"
                            inset 
                            class="mx-3"
                        ></v-switch>
                    </div>
                </div>
            </v-row>
        </v-container>
     

        <div class="mt-5">
            <v-row v-if="!listType">
                <v-col
                    v-for="i in 5"
                    :key="i"
                    cols="12" sm="6" md="4" lg="3"
                >
                    <v-card 
                        v-ripple 
                        class="cursor-pointer" 
                        @click="console.log('oi')"
                    >
                        <v-card-title class="font-weight-light text-small">#{{ i }} : Desenvolver rota de login</v-card-title>

                        <v-card-text 
                            class="mt-2 pa-1 mx-2 rounded border bg-purple-darken-2
                            d-flex justify-space-between"
                        >
                            <div>
                                Projeto Desenvolvimento - AR23
                            </div>
                            <div class="font-weight-light">
                                Total Gasto: 01:00
                            </div>
                        </v-card-text>
                        
                        <v-card-text 
                            class="mt-2 pa-2 mx-2 rounded border  text-center"
                        >
                            <strong>Início:</strong> 27/09/2024 03:00 | <strong>Fim:</strong> 27/09/2024 03:00
                        </v-card-text>
                        
                        <v-card-text class="mt-2">
                            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. 
                        </v-card-text>

                        <v-card-actions>
                            <v-row justify="center">
                                <v-btn class="mx-2">Iniciar</v-btn>
                                <v-btn class="mx-2">Parar</v-btn>
                                <v-btn class="mx-2" variant="tonal" color="red">Excluir</v-btn>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-else>  
                <v-container>
                    <v-col cols="12">
                        <v-card>
                            <v-row class="d-flex pa-4">
                                <v-card-title>Lista de Tarefas</v-card-title>
                            </v-row>
                
                            <v-card-text>
                                <v-data-table></v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-col>              
                </v-container>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let listType = ref(false)
</script>