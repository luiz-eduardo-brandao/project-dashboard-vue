<template>
    <div class="h-screen">
        <div class="d-flex">
            <h1 class="font-weight-light">Crie seu projeto!</h1>
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
                        label="Título" 
                        placeholder="Digite o nome de usuário..."
                    ></v-text-field>
                </v-col>    
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-textarea
                    label="Descrição"
                    name="input-7-1"
                    variant="filled"
                    auto-grow
                    ></v-textarea>
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
                <v-col cols="6" md="3">
                    <v-select
                    class="mr-3"
                    label="Dificuldade"
                    variant="outlined"
                    :items="['Fácil', 'Médio', 'Difícil']"
                ></v-select>
                </v-col>
            </v-row>

            <v-row class="mt-10">
                <v-col>
                    <v-btn 
                        class="mr-4"
                        variant="tonal" 
                        color="primary"
                        :loading="loginLoading"
                        size="large"
                    >Criar Projeto</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>