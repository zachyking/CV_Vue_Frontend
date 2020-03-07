<script lang="ts">
    import Vue from 'vue';
    import { complementary } from '@/assets/cv';

    export default Vue.extend({
        name: 'Complementary',
        computed: {
            skills() {
                return complementary;
            },
        },
        // mounted() {
        //    // console.log(this.skills);
        // },
    });
</script>

<template>
    <v-col xs4>
        <div class="title font-weight-regular">Complementary</div>
        <br />
        <v-list dense>
            <v-col xs6>
                <template v-for="(item, index) in skills">
                    <v-list-item :key="item.title">
                        <v-list-item-avatar>
                            <fa-icon :icon="['far', 'check-square']" size="2x" color="secondary lighten-6"></fa-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="index" v-if="index < skills.length - 1"></v-divider>
                </template>
            </v-col>
        </v-list>
    </v-col>
</template>

<style scoped>
    .v-list {
        margin: 0 1em 0 0;
    }

    .fa-check-square {
        color: darkgray;
    }
</style>
