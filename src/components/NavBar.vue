<template>
    <v-app-bar 
      flat 
      class="border-b" 
    >
      <v-app-bar-nav-icon v-if="isUserAuthenticated"
        v-show="!props.isDrawerOpen"
        @click="$emit('toggleDrawer')"
      />
      
      <v-app-bar-title>
        <div 
          @click="callRoute('/')"
          variant="text" 
          class="d-flex cursor-pointer"
        >
          <h3 class="font-weight-light">Meu App</h3>
        </div>
      </v-app-bar-title>

      <slot name="nav-bar-menu"></slot>
    </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const callRoute = (routeName) => router.push(routeName)

let props = defineProps({
    isDrawerOpen: {
      type: Boolean
    },
    isUserAuthenticated: {
      type: Boolean
    }
})


</script>