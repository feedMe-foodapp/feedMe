/* ocrResultSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Model(s) */
import { 
    OCRResultModel
 } from 'src/shared/models/ocrResult';

import {
    DEFAULT_RESULT
} from 'src/shared/models/ocrResult';

/* Interface(s) */
interface OCRResultState {
    ocrResult: OCRResultModel;
}

const initialState: OCRResultState = {
    ocrResult: DEFAULT_RESULT
};


export const OCRResultSlice = createSlice({
    name: 'ocrResult',
    initialState,
    reducers: {
        addResults: (state, action) => {
            state.ocrResult = action.payload;
        },
        clearResults: (state) => {
            state.ocrResult = DEFAULT_RESULT;
        }
    }
});

/* Action(s) */
export const {
    addResults,
    clearResults
} = OCRResultSlice.actions;

/* Readucer */
export default OCRResultSlice.reducer;