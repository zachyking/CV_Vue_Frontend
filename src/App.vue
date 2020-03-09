<template>
    <v-app>
        <div v-if="!isMobile()">
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
        </div>
        <div v-else>
            <div class="topnav">
                <a href="#home" class="active">Logo</a>
                <!-- Navigation links (hidden by default) -->
                <div id="myLinks">
                    <a href="#Home" class="scrollactive-item nav-item">Home</a>
                    <a href="#Profile" class="scrollactive-item nav-item">Profile</a>
                    <a href="#Experience" class="scrollactive-item nav-item">Experience</a>
                    <a href="#Skills" class="scrollactive-item nav-item">Skills</a>
                    <a href="#OtherSkills" class="scrollactive-item nav-item">Other skills</a>
                </div>
                <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
                <fa-icon :icon="['fas', 'fa-bars']" color="secondary"></fa-icon>
            </div>
        </div>

        <main>
            <section id="Home" class="landing">
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
                    <br />
                    <br />
                    <h1>Software engineer</h1>
                    <h2>Curriculum Vitae</h2>
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
            isMobile() {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            openMenu() {
                const x = document.getElementById("myLinks");
                if (x) {
                    if (x.style.display === "block") {
                        x.style.display = "none";
                    } else {
                        x.style.display = "block";
                    }
                }
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

<!--<style scoped src="@/assets/bulma.css"></style>-->
<style src="@/assets/main.css"></style>

<style>
    div.mid {
        display: flex;
        align-items: center;
        justify-content: center
    }

        div.mid h1, h2 {
            margin: 0
        }
</style>
