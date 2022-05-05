/* React */
import React, { useState, useEffect } from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

import {
    RootState
} from 'src/redux/store';

/* Util(s) */
import {
    validResultLength
} from 'src/utils/helper/ocrResult';

/* Model(s) */
import {
    OCRResultModel
} from 'src/shared/models/ocrResult';

import {
    DEFAULT_RESULT
} from 'src/shared/models/ocrResult';

/* Component(s) */
import ReceiptProcessor from 'src/components/receipt-processor/ReceiptProcessor';
import Illustration from 'src/components/shared/illustration/Illustration';

/* Stylesheet */
import styles from './ReceiptProcessorContainer.module.scss';

/* Interface(s) */
interface ReceiptProcessorContainerProps {
    receipt: string;
}

const ReceiptProcessorContainer: React.FC<ReceiptProcessorContainerProps> = ({ receipt }) => {
    const ocrResultState = useSelector((state: RootState) => state.ocrResult);

    // result
    const [result, setResult] = useState<OCRResultModel>(DEFAULT_RESULT);

    useEffect(() => {
        setResult(ocrResultState.ocrResult);
    }, [ocrResultState.ocrResult]);

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    console.log(result);

    return (
        <React.Fragment>
            <div className={styles.receipt_processor_container}>
                <div 
                    style={{
                        display: validResultLength(result) ? 'flex' : 'block'
                    }}
                    className={styles.flex_container}>
                    {!isProcessing ? (
                        <React.Fragment>
                            {validResultLength(result) && (
                                <ReceiptProcessor
                                    receipt={receipt}
                                    handleProcessing={handleProcessing}
                                />
                            )}
                        </React.Fragment>
                    ) : (
                        <Illustration 
                            icon={'/assets/icon/glass.svg'}
                            label={'Is processing'}
                            showDots={true}
                            showAnimation={true}
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ReceiptProcessorContainer;