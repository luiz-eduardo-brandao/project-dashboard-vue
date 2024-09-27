<template>
    <div class="h-screen">
        <h1>Tarefas</h1>
        
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
                <v-btn align="center"
                    class="mt-2 mr-3"
                    variant="tonal" 
                    color="primary"
                >
                    Nova Tarefa <v-icon  class="ml-2" icon="mdi-plus"></v-icon>
                </v-btn>
            </v-row>
        </v-container>
     

        <div class="mt-5">
            <v-row>
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
                        <v-card-title>Tarefa: {{ i }}</v-card-title>

                        <v-card-text class="mt-2">Descricao {{ i }}</v-card-text>

                        <v-card-actions>
                            <v-btn>Iniciar</v-btn>
                            <v-btn>Parar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>