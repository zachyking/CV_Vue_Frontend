import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#193149',
                secondary: '#A09FA8',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#C3C3C3',
            },
        },
    },
});
