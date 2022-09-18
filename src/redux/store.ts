

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    persistStore,
    persistReducer,
} from 'redux-persist';


import homeReducer from './slice/homeSlice';
import userReducer from './slice/userSlice';
import themeReducer from './slice/themeSlice';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


const reducers = combineReducers({
    home: homeReducer,
    dark: themeReducer,
    user: userReducer
});

const persistConfig: any = {
    key: 'root',
    version: 1,
    timeout: null,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['dark', 'user'], //Things u want to persist
    blacklist: ['home'], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store);