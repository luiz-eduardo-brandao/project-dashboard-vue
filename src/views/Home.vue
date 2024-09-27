<template>
    <div>
        <h1 class="mb-6">Bem-vindo!</h1>

        <v-container>

          <v-row class="mb-10">
            <v-col cols="12" md="6">
              <v-card
                class="mx-auto text-center"
                color="blue"
                max-width="600"
                dark
              >
                <v-card-text>
                  <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                      :model-value="values"
                      color="rgba(255, 255, 255, .7)"
                      height="100"
                      padding="24"
                      stroke-linecap="round"
                      smooth
                    >
                      <template v-slot:label="item">
                        {{ item.value }} 
                      </template>  
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>
  
                <v-card-text>
                  <div class="text-h4 font-weight-thin">
                    Tarefas Concluídas
                  </div>
                </v-card-text>
  
                <v-divider></v-divider>
  
                <v-card-actions class="justify-center">
                  <v-btn
                    variant="text"
                    block
                  >
                    Ir para o Relatório
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card
                class="mx-auto text-center"
                color="purple-darken-2"
                max-width="600"
                dark
              >
                <v-card-text>
                  <v-sheet color="purple-darken-3">
                    <v-sparkline
                      :model-value="values"
                      color="rgba(255, 255, 255, .7)"
                      height="100"
                      padding="24"
                      stroke-linecap="round"
                      smooth
                    >
                      <template v-slot:label="item">
                        {{ item.value }} 
                      </template>  
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>
  
                <v-card-text>
                  <div class="text-h4 font-weight-thin">
                    Tarefas Concluídas
                  </div>
                </v-card-text>
  
                <v-divider></v-divider>
  
                <v-card-actions class="justify-center">
                  <v-btn
                    variant="text"
                    block
                  >
                    Ir para o Relatório
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-card flat class="border mb-6">
          <div class="d-flex justify-space-between">
            <v-card-title>Projetos</v-card-title>
            <v-card-title>
              <v-btn @click="isDialogOpen = !isDialogOpen" variant="tonal" size="small" color="warning">Adicionar Usuário</v-btn>
             
              <v-dialog width="50%" v-model="isDialogOpen">
                <v-card>
                  <v-card-title>
                    <span class="font-weight-light text-grey text-h6">Adicionar Usuário</span>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field 
                          label="Nome" 
                          variant="outlined"
                          :rules="nomeRules"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field 
                          label="Email" 
                          variant="outlined"
                          :rules="emailRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-select
                      class="mt-5"
                      label="Cargo"
                      variant="outlined"
                      :items="['Admin', 'Gerente', 'Convidado']"
                    ></v-select>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn variant="text" @click="isDialogOpen = !isDialogOpen">Cancelar</v-btn>
                      <v-btn variant="tonal" color="success" @click="isDialogOpen = !isDialogOpen">Salvar</v-btn>
                    </v-card-actions>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>
          <v-table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-ripple>
                <td>Fulano</td>
                <td>fulano@gmail.com</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr v-ripple>
                <td>Edu</td>
                <td>edu@gmail.com</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr v-ripple>
                <td>Alan</td>
                <td>alan@gmail.com</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-row class="mt-6">
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border" v-ripple>
              <v-img 
                class="align-end text-white"
                src="https://images.pexels.com/photos/28225012/pexels-photo-28225012/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
              >
                <v-card-title>Top 10 Praias no Brasil</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio Vermelho</div>
                <div>Lorem, ipsum dor sit ameet </div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart"  variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border" v-ripple>
              <v-img 
                class="align-end text-white"
                src="https://images.pexels.com/photos/28225012/pexels-photo-28225012/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
              >
                <v-card-title>Top 10 Praias no Brasil</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio Vermelho</div>
                <div>Lorem, ipsum dor sit ameet</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border" v-ripple>
              <v-img 
                class="align-end text-white"
                src="https://images.pexels.com/photos/28225012/pexels-photo-28225012/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
              >
                <v-card-title>Top 10 Praias no Brasil</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio Vermelho</div>
                <div>Lorem, ipsum dor sit ameet</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border" v-ripple>
              <v-img 
                class="align-end text-white"
                src="https://images.pexels.com/photos/28225012/pexels-photo-28225012/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
              >
                <v-card-title>Top 10 Praias no Brasil</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio Vermelho</div>
                <div>Lorem, ipsum dor sit ameet</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card flat class="border" v-ripple>
              <v-img 
                class="align-end text-white"
                src="https://images.pexels.com/photos/28225012/pexels-photo-28225012/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
              >
                <v-card-title>Top 10 Praias no Brasil</v-card-title>
              </v-img>
              
              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio Vermelho</div>
                <div>Lorem, ipsum dor sit ameet</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>    
    </div>
</template>

<script setup>
import { ref } from 'vue'

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

</script>