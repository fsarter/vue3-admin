import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue';
import router from './router';

const pinia = createPinia(); // create pinia instance
const app = createApp(App); // name the instance for subsequent config
app.component('SvgIcon', SvgIcon); // register component globally
app.config.unwrapInjectedRef = true;
app.use(router);
app.use(pinia);
app.mount('#app');
