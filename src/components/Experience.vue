<script lang="ts">
    import Vue from 'vue';
    import { experience } from '@/assets/cv';

    export default Vue.extend({
        name: 'Experience',
        computed: {
            xp() {
                return experience;
            },
        },
    });
</script>

<template>
    <v-col xs12 md8>
        <div class="title font-weight-regular">Professional Experience</div>
        <v-row>
            <v-card v-for="(e, i) in xp" :key="e.company" class="card-col">
                <v-container fluid grid-list-lg>
                    <v-row>
                        <v-col xs8>
                            <div class="subheading">{{e.company}}</div>
                            <div class="body-2 font-weight-regular" v-html="e.title"></div>
                            <div class="body-2 font-weight-regular">{{e.years}}</div>
                        </v-col>
                        <v-col xs4>
                            <v-img :src="e.logo"
                                   height="35px"
                                   contain></v-img>
                        </v-col>
                    </v-row>
                    <v-row row wrap>
                        <v-chip v-for="t in e.tags"
                                :key="t"
                                outlined
                                small
                                color="secondary"
                                disabled>{{t}}</v-chip>
                    </v-row>
                    <v-tooltip bottom class="expand">
                        <template v-slot:activator="{ on }">
                            <v-btn v-ripple text icon color="secondary lighten-5" @click="$emit('selected', i)" v-on="on">
                                <fa-icon icon="expand-arrows-alt"></fa-icon>
                            </v-btn>
                        </template>
                        <span>Learn more</span>
                    </v-tooltip>
                </v-container>
            </v-card>
        </v-row>
    </v-col>
</template>

<style scoped>

   
</style>

