<template>
    <v-app>
        <header id="navig" class="nav is-fixed transp">
            <div class="container">
                <scrollactive>
                    <ul class="nav-center">
                        <li><a href="#Home" class="scrollactive-item nav-item">Home</a></li>
                        <li><a href="#Profile" class="scrollactive-item nav-item">Profile</a></li>
                        <li><a href="#Experience" class="scrollactive-item nav-item">Experience</a></li>
                        <!--  3-4 top professional interests with skill level (Web & Desktop apps, Data, Machine Learning) -->
                        <!--<li><a href="#section-4" class="scrollactive-item nav-item">Top interests</a></li>-->
                        <li><a href="#Skills" class="scrollactive-item nav-item">Skills</a></li>
                        <li><a href="#OtherSkills" class="scrollactive-item nav-item">Other skills</a></li>
                        <!--<li><a href="#section-4" class="scrollactive-item nav-item">Contact me</a></li>-->
                    </ul>
                </scrollactive>
            </div>
        </header>
        <main>
            <section id="Home" class="landing">
                <v-container>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Software engineer</h1>
                    <h2>Curriculum Vitae</h2>
                </v-container>
            </section>
            <section id="Profile" class="profile">
                <v-container>
                    <v-row>
                        <v-col xs12 lg8 offset-lg2>
                            <Introduction></Introduction>
                            <Education></Education>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            <section id="Experience" class="experience">
                <v-container>
                    <v-row>
                        <v-col xs12 lg8 offset-lg2>
                            <Experience v-on:selected="openDialog"></Experience>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            <section id="Skills" class="skills">
                <v-container>
                    <v-row>
                        <v-col xs12 lg8 offset-lg2>
                            <Tech></Tech>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            <section id="OtherSkills" class="other-skills">
                <v-container>
                    <v-row>
                        <v-col xs12 lg8 offset-lg2>
                            <Complementary></Complementary>
                        </v-col>
                    </v-row>
                </v-container>
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
    import Complementary from './components/Complementary.vue';
    import Tech from './components/Tech.vue';

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
            Complementary,
            Tech,
        },
        methods: {
            openDialog(val: number) {
                this.dialog = true;
                this.itemSelected = val;
            },
        },
        mounted() {
            window.onscroll = () => {
                const navig = document.getElementById('navig');
                const y: number = window.pageYOffset;

                if (navig !== null) {

                    // if (y < 300) {
                    //    const currOp: number = 300 / y;
                    //    navig.style.opacity = currOp.toString();
                    //    console.log("opacity: " + currOp);

                    // }
                    if (y > 300) {
                        navig.classList.add('my-navig');
                        navig.classList.remove('transp');
                    } else {
                        navig.classList.add('transp');
                        navig.classList.remove('my-navig');
                    }
                }
            };
        },
    });
</script>

<style scoped src="@/assets/bulma.css"></style>
<style scoped src="@/assets/header.css"></style>

<style scoped>
    .profile {
        background-color: #C3C3C3;
    }

    .experience {
        background-color: #BBA399;
    }

    .skills {
        background-color: #C3C3C3;
    }

    .other-skills {
        background-color: #908481;
    }

    h1, h2 {
        color: #F4F3F3;
    }

    .landing {
        /*background: url(https://images.unsplash.com/photo-1538947117537-48239ec91f18);*/
        background: url(../public/web-background.png)
    }

    #Home {
        width: 100%;
        /*background-image: url(https://images.unsplash.com/photo-1538947117537-48239ec91f18);*/
        background-repeat: round;
        background-attachment: fixed;
        text-align: center;
        vertical-align: central;
        color: #ffffff;
    }

    section {
        min-height: 100vh;
        width: 100vw;
    }

    .transp {
        background: none;
        background-image: linear-gradient(rgba(84,110,140,0.5), rgba(84,110,140,0));
    }

    .my-navig {
        background: #546E8C;
    }
</style>
