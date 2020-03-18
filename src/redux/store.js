import { createStore } from 'redux';

import appReducer from './reducer'

const reduxStore  = createStore(appReducer);

export default reduxStore