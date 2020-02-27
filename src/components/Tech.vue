<script lang="ts">
    import Vue from 'vue';
    import { stack } from '@/assets/cv';

    export default Vue.extend({
        name: 'Tech',
        computed: {
            techs() {
                return stack;
            },
        },
        mounted() {
            this.techs.forEach((s, j) => s.techs.forEach((t: any, i: any) => {
                setTimeout(() => this.$nextTick(() => t.skill = t.target), i * j * 400);
            }));
        },
    });
</script>

<template>
    <v-container>
        <div v-for="s in techs" :key="s.label">
            <v-col>
                <div class="subheading font-weight-regular">{{s.label}}</div>
                <br />
                <v-list dense>
                    <template v-for="(item, index) in s.techs">
                        <v-col xs-6>
                            <v-list-item :key="item.title">
                                <v-list-item-avatar>
                                    <img :src="item.avatar">
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-html="item.title"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-progress-linear color="secondary lighten-5"
                                               height="5"
                                               :value="item.skill"
                                               :key="index"></v-progress-linear>
                        </v-col>
                    </template>
                </v-list>
                <br>
            </v-col>
        </div>
    </v-container>
</template>

<style scoped>
    .v-list {
        margin: 0 1em 0 0;
    }
    .
    .v-progress-linear {
        margin-top: 0;
    }

    .last-child {
        margin-bottom: 0;
    }
</style>
