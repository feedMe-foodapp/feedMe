/* React */
import React, { useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    deleteReceipt
} from 'src/redux/features/receiptSlice';

import {
    clearResults
} from 'src/redux/features/ocrResultSlice';

import {
    showToast,
    setToast
} from 'src/redux/features/toastSlice';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon
} from '@ionic/react';

import {
    settingsOutline,
    imageOutline,
    informationCircleOutline,
    trashBinOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ReceiptOptFab.module.scss';

const ReceiptOptFab: React.FC = () => {
    const dispatch = useDispatch();

    // showFabList
    const [showFabList, setShowFabList] = useState<boolean>(false);

    return (
        <IonFab
            className={
                showFabList ? `${styles.slide_left}` : `${styles.slide_right} ${styles.fab_container}`
            }
            vertical="bottom"
            horizontal="end">
            <IonFabButton
                className={styles.open_fab_list}
                onClick={
                    () => {
                        setShowFabList(!showFabList);
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={settingsOutline}
                />
            </IonFabButton>
            <IonFabList
                className={styles.fab_list}
                side="top">
                <IonFabButton
                    className={styles.modal_btn}>
                    <IonIcon
                        icon={imageOutline}
                    />
                </IonFabButton>
                <IonFabButton
                    className={styles.trash_btn}
                    onClick={
                        () => {
                            dispatch(deleteReceipt());
                            dispatch(setToast({
                                icon: informationCircleOutline,
                                message: 'Receipt cleared',
                                color: '#77da85'
                            }));
                            dispatch(showToast(true));
                            dispatch(clearResults());
                        }
                    }>
                    <IonIcon icon={trashBinOutline} />
                </IonFabButton>
            </IonFabList>
        </IonFab>
    );
};

export default ReceiptOptFab;