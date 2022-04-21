/* keyValueSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface KeyValueState {
    splitPane: boolean;
}

enum KeyValue {
    SPLIT_PANE = 'split-pane'
}

const initialState: KeyValueState ={
    splitPane: false
};

export const keyValueSlice = createSlice({
    name: 'keyValue',
    initialState,
    reducers: {
        show: (state, action) => {
            switch(action.payload) {
                case KeyValue.SPLIT_PANE: 
                    state.splitPane = true;
                    break;
            }
        },
        hide: (state, action) => {
            switch(action.payload) {
                case KeyValue.SPLIT_PANE:
                    state.splitPane = false;
            }
        }
    }
}); 

/* Action(s) */
export const {
    show,
    hide
} = keyValueSlice.actions;

/* Reducer */
export default keyValueSlice.reducer;