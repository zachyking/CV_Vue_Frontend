import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faExpandArrowsAlt, faFileDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faTwitter, faStackOverflow, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const a = [ faExpandArrowsAlt, faCheckSquare, faFileDownload , faBars];
const b = [ faCodepen, faTwitter, faStackOverflow, faGithub, faVuejs ];
[...a, ...b].forEach((i) => library.add(i));

Vue.component('fa-icon', FontAwesomeIcon);
