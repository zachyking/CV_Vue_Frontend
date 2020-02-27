<template>
    <v-app>
        <header id="site-header" class="nav is-fixed">
            <div class="container">
                <scrollactive>
                    <ul class="nav-center">
                        <li><a href="#Home" class="scrollactive-item nav-item">Home</a></li>
                        <li><a href="#Profile" class="scrollactive-item nav-item">Profile</a></li>
                        <li><a href="#Experience" class="scrollactive-item nav-item">Experience</a></li>

                        <!--  3-4 top professional interests with skill level (Web & Desktop apps, Data, Machine Learning) -->
                        <!--<li><a href="#section-4" class="scrollactive-item nav-item">Top interests</a></li>-->

                        <li><a href="#Skills" class="scrollactive-item nav-item">Skills</a></li>

                        <!--<li><a href="#section-4" class="scrollactive-item nav-item">Contact me</a></li>-->
                    </ul>
                </scrollactive>
            </div>
        </header>
        <main>
            <v-footer app>
                <a class="mr-4" href="https://github.com/zachyking/CV_Vue_Frontend">Check this on GitHub!<fa-icon :icon="['fab', 'github']" size="lg"></fa-icon></a>
            </v-footer>
            <section id="Home" class="section hero is-primary is-fullheight">
                <div class="container">
                    <!--<Introduction></Introduction>-->
                </div>
            </section>

            <section id="Profile" class="section hero is-info is-fullheight">
                <div class="container">
                    <Introduction></Introduction>
                    <Education></Education>
                </div>
            </section>

            <section id="Experience" class="section hero is-danger is-fullheight">
                <div class="container">
                    <Experience v-on:selected="openDialog"></Experience>
                </div>
            </section>

            <section id="Skills" class="section hero is-success is-fullheight">
                <div class="container">
                    <Soft></Soft>
                </div>
            </section>
            <v-footer app>
                <a class="mr-4" href="https://github.com/zachyking/CV_Vue_Frontend" target="_blank">Check this on GitHub!<fa-icon :icon="['fab', 'github']" size="lg"></fa-icon></a>
            </v-footer>
        </main>
        <v-dialog v-model="dialog"
                  width="500">
            <ExperienceItem :itemIndex="itemSelected"></ExperienceItem>
        </v-dialog>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Education from './components/Education.vue';
    import Introduction from './components/Introduction.vue';
    import Experience from './components/Experience.vue';
    import ExperienceItem from './components/ExperienceItem.vue';
    import Soft from './components/Soft.vue';

    export default Vue.extend({
        name: 'App',
        data: () => ({
            dialog: false,
            itemSelected: -1,
        }),
        components: {
            Education,
            Introduction,
            Experience,
            ExperienceItem,
            Soft,
        },
        methods: {
            openDialog(val: number) {
                this.dialog = true;
                this.itemSelected = val;
            },
        },
        //mounted() {
            
        //}
    });
</script>

<style scoped src="@/assets/bulma.css"></style>
<style scoped src="@/assets/header.css"></style>

<style scoped>
</style>
