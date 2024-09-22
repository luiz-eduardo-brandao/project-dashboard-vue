<template>
    <v-navigation-drawer class="d-flex flex-column justify-space-between" width="320" v-model="props.isDrawerOpen">
      <v-list class="h-75">
        <div class="d-flex">
            <v-list-item
                lines="two"
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                subtitle="Logged in"
                title="John Smith"
            ></v-list-item>
            <v-spacer></v-spacer>            
            <v-app-bar-nav-icon class="mr-3" @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        </div>

        <v-divider class="my-4"></v-divider>

        <div>
          <v-list-subheader>Menu</v-list-subheader>
          <v-list-item prepend-icon="mdi-home" to="/">Home</v-list-item>
  
          <v-list-group value="users">
            <template #activator="{ props }">
              <!-- <v-btn v-bind="props">Abrir</v-btn> -->
  
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Financeiro"
              >
              </v-list-item>
            </template>
            
            <!-- <v-list> -->
              <v-list-item prepend-icon="mdi-currency-usd" to="/faturamento">Faturamento</v-list-item>
              <v-list-item prepend-icon="mdi-chart-line" to="/relatorio">Relatório</v-list-item>
            <!-- </v-list> -->
          </v-list-group>
          <v-divider class="my-3"></v-divider>
        </div>

        <div v-if="isAdmin()">
          <v-list-subheader>Administrativo</v-list-subheader>
  
          <v-list-item prepend-icon="mdi-account" to="/users">Usuários</v-list-item>
          <v-list-item prepend-icon="mdi-cog" to="/system">Sistema</v-list-item>
          
          <v-divider class="my-3"></v-divider>
        </div>
        
        <div>
          <v-list-subheader>Projetos</v-list-subheader>
          
          <v-list-item prepend-icon="mdi-email" to="/projects">Projetos</v-list-item>
          <v-list-item prepend-icon="mdi-check-outline" to="/tasks">Tarefas</v-list-item>
        </div>
      </v-list>
      <v-row justify="center">
        <div class="position-absolute bottom-0 mb-5" >
          <v-btn icon="mdi-cog"></v-btn>
        </div>
      </v-row>
    </v-navigation-drawer>
</template>

<script setup>
import { useUserStore } from '../stores/UserStore'

const useStore = useUserStore()

const isAdmin = () => {
  const user = useStore.getUser()

  return user?.role == 'Admin' ? true : false
}

let props = defineProps({
    isDrawerOpen: {
        type: Boolean
    }
})

</script>