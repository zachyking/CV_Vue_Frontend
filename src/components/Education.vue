<script lang="ts">
    import Vue from 'vue';
    import { education } from '@/assets/cv';
    import { IEducation } from '@/types';

    export default Vue.extend({
        name: 'HelloWorld',
        data: () => ({
            education: {} as IEducation[],
        }),
        mounted() {
            this.education = education;
            // tslint:disable-next-line:no-console
            console.log(this.education);
        },
    });
</script>

<template>
    <v-col xs12 md8>
        <div class="title font-weight-regular mt-4">Education</div>
        <br>
        <v-card v-for="e in education" :key="e.institution" class="mb-2">
            <v-container fluid grid-list-lg>
                <v-row>
                    <v-col xs7>
                        <div class="subheading" v-html="e.institution"></div>
                        <div class="body-2 font-weight-regular" v-html="e.degree"></div>
                        <div class="body-2 font-weight-regular">{{e.years}}</div>
                    </v-col>
                    <v-col xs5>
                        <v-img :src="e.logo"
                               height="35px"
                               contain></v-img>
                    </v-col>
                </v-row>
                <v-row row wrap>
                    <v-chip v-for="t in e.hightlights"
                            :key="t"
                            outline
                            small
                            color="secondary"
                            disabled>{{t}}</v-chip>
                </v-row>
            </v-container>
        </v-card>
    </v-col>
</template>

<style scoped>

    .expand {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>

