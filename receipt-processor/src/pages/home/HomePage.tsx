/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    hide
} from 'src/redux/features/keyValueSlice';

/* Ionic */
import {
    IonPage
} from '@ionic/react';

/* Stylesheet */
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hide('split-pane'));
    }, [dispatch]);

    return (
        <IonPage>

        </IonPage>
    );
};

export default HomePage;