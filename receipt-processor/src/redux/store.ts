/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const store = configureStore({
    reducer: {

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

export {
    store
};

/* Type(s) */
export type RootState = ReturnType<typeof store.getState>