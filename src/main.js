import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import store from './store/index.js';
import dotenv from 'dotenv';
import BaseCard from './components/layout/UI/BaseCard.vue';
import BaseButton from './components/layout/UI/BaseButton.vue';
import BaseBadge from './components/layout/UI/BaseBadge.vue';
import BaseSpinner from './components/layout/UI/BaseSpinner.vue';
import BaseDialog from './components/layout/UI/BaseDialog.vue';

const app = createApp(App);

dotenv.config();


app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner',BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');