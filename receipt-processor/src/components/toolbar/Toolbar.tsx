/* React */
import React from 'react';

/* Ionic */
import {
    IonHeader, 
    IonToolbar,
    IonMenuButton,
    IonIcon
} from '@ionic/react';

import {
    fastFoodOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './Toolbar.module.scss';

const Toolbar: React.FC = () => {
    return (
        <IonHeader className={styles.header_container}>
            <IonToolbar className={styles.toolbar_container}>
                <IonMenuButton 
                    className={styles.menu_btn} 
                    slot="start">
                    <IonIcon 
                        className={styles.icon} 
                        icon={fastFoodOutline}
                    />
                </IonMenuButton>
                <div className={styles.label_container}>
                    <span>feed</span>Me
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Toolbar;