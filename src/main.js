import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue';

const app = createApp(App); // name the instance for subsequent config
app.component('SvgIcon', SvgIcon); // register component globally
app.mount('#app');
