import { configureStore } from '@reduxjs/toolkit'; 
import { setupListeners } from '@reduxjs/toolkit/query/react'; 
import { getUsers } from './api'; 
import counterReducer from './reducers'; 
 
const store = configureStore({ 
  reducer: { 
    counter: counterReducer, 
    [getUsers.reducerPath]: getUsers.reducer, 
  }, 
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(getUsers.middleware), 
}); 
 
setupListeners(store.dispatch); 
 
export default store;