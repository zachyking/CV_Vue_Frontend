<template>
    <v-app>
        <header id="site-header" class="nav is-fixed">
            <div class="container">
                <scrollactive>
                        <ul class="nav-center">
                            <li><a href="#section-1" class="scrollactive-item nav-item">Section 1</a></li>
                            <li><a href="#section-2" class="scrollactive-item nav-item">Section 2</a></li>
                            <li><a href="#section-3" class="scrollactive-item nav-item">Section 3</a></li>
                            <li><a href="#section-4" class="scrollactive-item nav-item">Section 4</a></li>
                        </ul>
                </scrollactive>
            </div>
        </header>

        <main>
            <section id="section-1" class="section hero is-primary is-fullheight">
                <div class="container">
                    <h1 class="heading title is-1">Section 1</h1>
                </div>
            </section>

            <section id="section-2" class="section hero is-info is-fullheight">
                <div class="container">
                    <Introduction></Introduction>
                </div>
            </section>

            <section id="section-3" class="section hero is-danger is-fullheight">
                <div class="container">
                    <Education></Education>
                </div>
            </section>

            <section id="section-4" class="section hero is-success is-fullheight">
                <div class="container">
                    <h1 class="heading title is-1">Section 4</h1>
                </div>
            </section>
        </main>

        <!--<v-content>
            <section id="home-section" class="section hero is-primary is-fullheight">
                <HelloWorld />
            </section>
        </v-content>-->
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Education from './components/Education.vue';
    import Introduction from './components/Introduction.vue';
    //  import { education } from '@/assets/cv';

    export default Vue.extend({
        name: 'App',
        components: {
            Education,
            Introduction,
        },
    });
</script>

<style scoped src="@/assets/bulma.css"></style>
<style scoped src="@/assets/header.css"></style>

<style>
    /*#app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }*/
</style>
