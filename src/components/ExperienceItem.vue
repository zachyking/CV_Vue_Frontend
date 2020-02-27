<script lang="ts">
    import Vue from 'vue';
    import service from '@/services/cv.service';

    export default Vue.extend({
        name: 'ExperienceItem',
        props: {
            itemIndex: Number,
        },
        computed: {
            item() {
                return service.getByIndex(this.itemIndex);
            },
        },
    });
</script>

<template>
    <v-card>
        <v-container fluid grid-list-lg v-if="item">
            <v-row>
                <v-col xs7>
                    <div class="title font-weight-regular">{{item.company}}</div>
                    <div>{{item.years}}</div>
                </v-col>
                <v-col xs5>
                    <v-img :src="item.logo"
                           height="50px"
                           contain></v-img>
                </v-col>
            </v-row>
            <v-row column class="mt-4 mb-4">
                <div class="title mb-3 font-weight-regular" v-html="item.title"></div>
                <div class="body-2 font-weight-regular" v-html="item.description"></div>
            </v-row>
            <v-row row wrap>
                <v-chip v-for="t in item.tags"
                        :key="t"
                        outlined
                        small
                        color="secondary">{{t}}</v-chip>
            </v-row>
        </v-container>
    </v-card>
</template>
