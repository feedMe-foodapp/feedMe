/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    addReceipt
} from 'src/redux/features/receiptSlice';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    cameraOutline
} from 'ionicons/icons';

/* Capacitor */
import {
    Camera,
    CameraSource,
    CameraResultType
} from '@capacitor/camera';

/* Stylesheet */
import styles from './ReceiptUploader.module.scss';

const ReceiptUploader: React.FC = () => {
    const dispatch = useDispatch();

    const takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100
            });

            if (image.dataUrl) {
                dispatch(addReceipt(image.dataUrl));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <IonFab
            className={styles.fab_container}
            vertical="bottom"
            horizontal="end">
            <IonFabButton 
                className={styles.fab_btn}
                onClick={
                    () => {
                        takePicture();
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={cameraOutline}
                />
            </IonFabButton>
        </IonFab>
    );
};

export default ReceiptUploader;