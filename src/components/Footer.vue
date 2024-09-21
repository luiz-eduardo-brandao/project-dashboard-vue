<template>
    <v-footer
        class="border text-center d-flex flex-column"
      >
        <div class="mb-4">
          <v-btn
            icon="mdi-facebook"
            class="bg-blue mx-4"
            variant="text"
          ></v-btn>
          <v-btn
            icon="mdi-twitter"
            class="mx-4"
            variant="text"
          ></v-btn>
          <v-btn
            icon="mdi-linkedin"
            class="mx-4"
            variant="text"
          ></v-btn>
          <v-btn
            icon="mdi-instagram"
            class="bg-purple-lighten-1 mx-4"
            variant="text"
          ></v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider class="my-4"></v-divider>

        <div>
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-footer>
</template>