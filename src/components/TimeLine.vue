<template>
    <v-dialog 
        v-model="props.isTimelineOpen"
        max-width="900"
        class="rounded-md border"
    >
        <v-card>
            <v-card-title class="mt-2">
                <span class="font-weight-light text-grey text-h6">Timeline: </span>
            </v-card-title>
            <v-card-text>
                <v-timeline align="start" side="end">
                    <v-timeline-item
                        v-for="item in projectTimeline"
                        :key="item.id"
                        dot-color="blue"
                        size="small"
                    >
                        <div class="d-flex font-weight-light">
                            <div class="d-flex flex-column">
                                <span class="me-4">{{ item.date }}</span>
                                <span class="me-4 font-weight-light">{{ item.hour }}</span>
                            </div>
                            <div>
                            <strong>{{ item.action }}</strong>
                            <div class="text-caption">
                                {{ item.title }}
                            </div>
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
            <v-card-actions>
                <v-btn 
                    color="secondary" 
                    variant="tonal" 
                    @click="$emit('close')"
                    class="ma-3"
                >Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

let props = defineProps({
    isTimelineOpen: {
        type: Boolean
    },
    projectTimeline: {
        type: Array
    },
})

</script>