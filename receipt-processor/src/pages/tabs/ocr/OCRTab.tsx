/* React */
import React from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

import {
    RootState
} from 'src/redux/store';

/* Util(s) */
import ReceiptRecognitionWrapper from 'src/utils/wrapper/receipt-recognition/ReceiptRecognitionWrapper';

/* Component(s) */
import ReceiptPreview from 'src/components/receipt-preview/ReceiptPreview';
import ReceiptProcessorContainer from 'src/components/receipt-processor-container/ReceiptProcessorContainer';

const OCRTab: React.FC = () => {
    const receiptState = useSelector((state: RootState) => state.receipt);

    return (
        <ReceiptRecognitionWrapper>
            <ReceiptPreview receipt={receiptState.receipt} />
            <ReceiptProcessorContainer receipt={receiptState.receipt} />
        </ReceiptRecognitionWrapper>
    );
};

export default OCRTab;