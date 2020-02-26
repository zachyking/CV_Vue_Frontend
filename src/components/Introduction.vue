<script lang="ts">
    import Vue from 'vue';
    import { buttons, profile } from '@/assets/cv';
    import { IButton, IProfile } from '@/types';

    export default Vue.extend({
        name: 'Introduction',
        data: () => ({
            buttons: {} as IButton[],
            profile: {} as IProfile,
        }),
        methods: {
            open(url: string) {
                window.open(url, '_blank');
            },
        },
        mounted() {
            this.buttons = buttons;
            this.profile = profile;
            // tslint:disable-next-line:no-console
            console.log(this.buttons);
            // tslint:disable-next-line:no-console
            console.log(this.profile);
        },
    });
</script>

<template>
    <v-container fluid grid-list-lg>
        <v-row row wrap>
            <v-col xs4 md3 class="text-xs-center">
                <v-avatar :tile="false"
                          size="100"
                          color="grey lighten-4">
                    <img :src="profile.image" alt="profile picture">
                </v-avatar>
            </v-col>
            <v-col xs8 md6>
                <div class="mt-3">
                    <div class="headline">{{profile.name}}</div>
                    <v-spacer></v-spacer>
                    <div class="title font-weight-light">{{profile.title}}</div>
                    <div class="subheading font-weight-light">{{profile.location}}</div>
                </div>
            </v-col>
            <v-col xs12 md3 class="text-xs-center text-md-right">
                <v-btn v-for="btn in buttons"
                       :key="btn.label"
                       small
                       outlined
                       color="grey lighten-2"
                       @click="open(btn.url)">
                    <fa-icon :icon="btn.icon" size="lg"></fa-icon>
                    <span class="hidden-sm-and-down ml-2">{{ btn.label }}</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>


    .social, .v-btn {
        cursor: pointer;
    }
</style>
