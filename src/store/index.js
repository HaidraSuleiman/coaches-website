import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule
    },
    mutations: mutations,
    actions: actions,
    getters: getters
});

export default store;