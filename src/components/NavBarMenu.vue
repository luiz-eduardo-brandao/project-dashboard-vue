<template #append>
    <v-menu>
        <template v-slot:activator="{ props }">
        <v-btn class="mr-7 pa-3" icon v-bind="props">
            <v-badge content="2" color="red">
            <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge>
        </v-btn>
        </template>
        
        <v-card 
            class="rounded-lg"
            min-width="300px" 
            max-width="500px"
        >
            <v-card-title>
                <span class="text-left text-grey text-subtitle-1">Notificações (2)</span>
            </v-card-title>
            
            <v-divider></v-divider>
            
            <v-list>
                <v-list-item 
                    prepend-icon="mdi-bell-outline" 
                    append-icon="mdi-email-open"
                    class="my-2"
                    to="/notificacao"
                >
                    <v-list-item-title class="text-h6">
                        Vuetify & Freeflow Jobs
                    </v-list-item-title>

                    <span class="text-subtitle-1 font-weight-light">
                        fgefef fgefeffgefeffgefeffgefef fgefeffgefef
                        fgefeffgefeffgefef fgefefv fgefef
                    </span>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item 
                    prepend-icon="mdi-bell-outline" 
                    append-icon="mdi-email-open"
                    to="/notificacao"
                >
                    <v-list-item-title class="text-h6">
                        Vuetify & Freeflow Jobs
                    </v-list-item-title>
                    <span class="text-subtitle-1 font-weight-light">
                        fgefef fgefeffgefeffgefeffgefef fgefeffgefef
                        fgefeffgefeffgefef fgefefv fgefef
                    </span>
                </v-list-item>
            </v-list> 
        </v-card>
    </v-menu>

    <v-menu>
        <template v-slot:activator="{ props }">
        <v-avatar v-bind="props" class="cursor-pointer mr-5">
            <v-img
            cover
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
        </v-avatar>  
        </template>

        <v-card min-width="200px">
        <v-list :lines="false" density="compact" nav>
            <v-list-item 
                to="/profile"
                prepend-icon="mdi-account-outline"
            >
                <v-list-item-title>
                    Meu Perfil
                </v-list-item-title>
            </v-list-item>

            <v-list-item 
                to="/favoritos"
                prepend-icon="mdi-star-outline"
            >
                <v-list-item-title>
                    Favoritos
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item  
                @click="$emit('logout')"
                class="cursor-pointer"
                prepend-icon="mdi-logout"
            >
                <v-list-item-title>
                    Sair
                </v-list-item-title>
            </v-list-item>
        </v-list>
        </v-card>
    </v-menu>

    <slot name="dialog"></slot>
</template>
