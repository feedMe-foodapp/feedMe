/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    addResults
} from 'src/redux/features/ocrResultSlice';

/* Ionic */ 
import {
    IonButton,
    IonIcon
} from '@ionic/react';

import {
    analyticsOutline
} from 'ionicons/icons';

/* Service(s) */
import {
    ServiceLoader
} from 'src/shared/services/serviceLoader';

/* Util(s) */
import {
    createResultObject
} from 'src/utils/helper/ocrResult';

/* Stylesheet */
import styles from './ReceiptProcessor.module.scss';

/* Interface(s) */
interface ReceiptProcessorProps {
    receipt: string;
    handleProcessing: Function;
}

const ReceiptProcessor: React.FC<ReceiptProcessorProps> = ({ receipt, handleProcessing }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.receipt_processor}>
            <div 
                style={{
                    color: !receipt ? '#d2d7e2' : '#384357'
                }}
                className={styles.label}>
                Push <span style={{color: !receipt ? '#d2d7e2' : 'var(--ion-color-secondColor)'}}>Analyze</span> to start Optical Character Recognition
            </div>
            <IonButton
                className={styles.btn}
                expand="block"
                disabled={!receipt}
                onClick={
                    () => {
                        handleProcessing(true);
                        ServiceLoader.tesseract().recognize(receipt).then((result: any) => {
                            dispatch(addResults(createResultObject(result)));
                            console.log(result);
                            handleProcessing(false);
                        });
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={analyticsOutline}
                    slot="start"
                />
                Analyze
            </IonButton>
        </div>
    );
};

export default ReceiptProcessor;