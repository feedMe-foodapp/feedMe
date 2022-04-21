/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    showToast
} from 'src/redux/features/toastSlice';

import {
    RootState
} from 'src/redux/store';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton
} from '@ionic/react';

import {
    closeOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ToastContainer.module.scss';

const ToastContainer: React.FC = () => {
    const toastState = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(showToast(false));
        }, 5000);
    });

    return (
        <React.Fragment>
            {toastState.show && (
                <div className={styles.toast_container}>
                    <div
                        style={{ background: toastState.content.color }}
                        className={styles.toast}>
                        <IonGrid className={styles.grid_container}>
                            <IonRow className={styles.row}>
                                <IonCol
                                    className={styles.col}
                                    size="1">
                                    <IonIcon
                                        className={styles.icon}
                                        icon={toastState.content.icon}
                                    />
                                </IonCol>
                                <IonCol
                                    className={styles.col}
                                    size="10">
                                    <div className={styles.message}>
                                        {toastState.content.message}
                                    </div>
                                </IonCol>
                                <IonCol
                                    className={styles.col}
                                    size="1">
                                    <IonButton
                                        className={styles.btn}
                                        onClick={
                                            () => {
                                                dispatch(showToast(false));
                                            }
                                        }>
                                        <IonIcon
                                            className={styles.icon}
                                            icon={closeOutline}
                                        />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default ToastContainer;