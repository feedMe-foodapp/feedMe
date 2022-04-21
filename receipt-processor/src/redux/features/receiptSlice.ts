/* receiptSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ReceiptState {
    receipt: string;
} 

const initialState: ReceiptState = {
    receipt: ''
}

export const receiptSlice = createSlice({
    name: 'receiptSlice',
    initialState,
    reducers: {
        addReceipt: (state, action) => {
            state.receipt = action.payload;
        },
        deleteReceipt: (state) => {
            state.receipt = initialState.receipt;
        }
    }
});

/* Action(s) */
export const { 
    addReceipt,
    deleteReceipt
} = receiptSlice.actions;

/* Reducer */
export default receiptSlice.reducer;