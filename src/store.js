
import {configureStore} from '@reduxjs/toolkit';

import { cartreducer } from './Reducer/cartreducer';
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistconfig={
    key:'root',
    storage

}

const persistedReducer=persistReducer(persistconfig,cartreducer)
 export const store=configureStore(
    {
        reducer:persistedReducer
    }
    
 )
 export const persistor=persistStore(store)