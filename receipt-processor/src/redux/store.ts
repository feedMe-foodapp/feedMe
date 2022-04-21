/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage from 'redux-persist/es/storage';

/* Reducer(s) */
import keyValueReducer from 'src/redux/features/keyValueSlice';
import receiptReducer from 'src/redux/features/receiptSlice';
import ocrResultReducer from 'src/redux/features/ocrResultSlice';
import toastReducer from 'src/redux/features/toastSlice';

const persistedReceiptConfig = {
    key: 'receipt',
    storage
};

const persistedOCRResultConfig = {
    key: 'ocrResult',
    storage
};

const persistedReceiptReducer = persistReducer(persistedReceiptConfig, receiptReducer);

const persistedOCRResultReducer = persistReducer(persistedOCRResultConfig, ocrResultReducer);

const store = configureStore({
    reducer: {
        keyValue: keyValueReducer,
        receipt: persistedReceiptReducer,
        ocrResult: persistedOCRResultReducer,
        toast: toastReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH, 
                REHYDRATE, 
                PAUSE, 
                PERSIST, 
                PURGE, 
                REGISTER
              ]
        }
    })
});

const persistor = persistStore(store);

export {
    store,
    persistor
};

/* Type(s) */
export type RootState = ReturnType<typeof store.getState>