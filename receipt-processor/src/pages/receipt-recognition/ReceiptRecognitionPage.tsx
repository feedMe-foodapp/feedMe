/* React */
import React, { useEffect } from 'react';

/* React-Router */
import {
    useRouteMatch,
    Route,
    Redirect
} from 'react-router-dom';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    show
} from 'src/redux/features/keyValueSlice';

/* Ionic */
import {
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon
} from '@ionic/react';

import {
    IonReactRouter
} from '@ionic/react-router';

/* Tab(s) */
import OCRTab from 'src/pages/tabs/ocr/OCRTab';

/* Stylesheet */
import styles from './ReceiptRecognitionPage.module.scss';

const ReceiptRecognitionPage: React.FC = () => {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(show('split-pane'));
    }, [dispatch]);

    return (
        <IonReactRouter>
            {/* Tab-Layout */}
            <IonTabs className={styles.tab_container}>
                <IonRouterOutlet>
                    <Route exact path={`${path}/ocr`}>
                        <OCRTab />
                    </Route>
                    <Route
                        render={() => <Redirect to={`${path}/ocr`} />}
                    />
                </IonRouterOutlet>
                <IonTabBar
                    className={styles.tab_bar}
                    slot="bottom">
                    <IonTabButton
                        className={`${styles.tab_btn}`}
                        tab="ocr"
                        href={`${path}/ocr`}>
                        <IonIcon 
                            className={styles.icon} 
                            icon={'/assets/icon/ocr.svg'} 
                        />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default ReceiptRecognitionPage;