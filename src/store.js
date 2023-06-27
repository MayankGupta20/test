import { createStore,combineReducers ,applyMiddleware} from 'redux';
import recordReducer from './reducer/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  records: recordReducer
});


const initialState = {

}

const middleware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));



export default store;