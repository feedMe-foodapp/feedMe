/* React */
import React, { useRef, useEffect } from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

import {
    RootState
} from 'src/redux/store';

/* Ionic */
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';

/* Framer-Motion */
import {
    motion
} from 'framer-motion';

/* Model(s) */
import {
    VariantModel,
    TransitionModel,
} from 'src/shared/animation/pageTransition';

/* Mock(s) */
import {
    VARIANT,
    TRANSITION
} from 'src/shared/animation/pageTransition';

/* Util(s) */
import {
    styleScrollbars
} from 'src/utils/helper/scrollbar';

/* Component(s) */
import Toolbar from 'src/components/toolbar/Toolbar';
import ReceiptOptFab from 'src/components/receipt-opt-fab/ReceiptOptFab';
import ReceiptUploader from 'src/components/receipt-uploader/ReceiptUploader';

/* Stylesheet */
import styles from './ReceiptRecognitionWrapper.module.scss';

/* Interface(s) */
interface ReceiptRecognitionWrapperProps {
    children: React.ReactNode[];
}

const ReceiptRecognitionWrapper: React.FC<ReceiptRecognitionWrapperProps> = ({ children }) => {
    const receiptState = useSelector((state: RootState) => state.receipt);
    const ionContentRef: any = useRef();
    const variant: VariantModel = VARIANT;
    const transition: TransitionModel = TRANSITION;

    useEffect(() => {
        styleScrollbars(ionContentRef.current);
    }, []);

    const renderColumns = children.map((child: React.ReactNode, index: number) => {
        return (
            <IonCol
                key={index}
                className={styles.col}
                sizeXs="12"
                sizeXl="6">
                <IonCard className={styles.card}>
                    <IonContent ref={ionContentRef}>
                        <IonCard className={styles.card}>
                            {child}
                        </IonCard>
                    </IonContent>
                    {index === 0 && receiptState.receipt && (
                        <ReceiptOptFab />
                    )}
                    {index === 1 && (
                        <ReceiptUploader />
                    )}
                </IonCard>
            </IonCol>
        );
    });

    return (
        <React.Fragment>
            <Toolbar />
            <IonContent
                ref={ionContentRef}
                className={styles.content_container}>
                <motion.div
                    style={{ height: '100%' }}
                    initial={variant.initial}
                    animate={variant.in}
                    exit={variant.out}
                    transition={transition}>
                    <IonGrid className={styles.grid_container}>
                        <IonRow className={styles.row}>
                            {renderColumns}
                        </IonRow>
                    </IonGrid>
                </motion.div>
            </IonContent>
        </React.Fragment>
    );
};

export default ReceiptRecognitionWrapper;