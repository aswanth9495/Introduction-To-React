import { createStore } from 'redux';

import todoAppStore from './todoAppStore';

const store = createStore(todoAppStore);

export default store;