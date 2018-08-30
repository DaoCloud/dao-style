import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/mode/vue/vue';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';

Vue.use(VueCodemirror, /* {
options: { theme: 'base16-dark', ... },
events: ['scroll', ...]
} */);

