import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const myStore = createStore(rootReducer);

export default myStore;