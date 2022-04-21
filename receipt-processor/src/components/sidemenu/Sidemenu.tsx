/* React */
import React, { useState, useEffect, useRef } from 'react';

/* React-Router */
import {
    useLocation
} from 'react-router-dom';

/* Ionic */
import {
    IonMenu,
    IonContent,
    IonButton,
    IonIcon,
    IonList
} from '@ionic/react';

/* Model(s) */
import MainRoutesModel from 'src/shared/mocks/mainRoutes';

/* Mock(s) */
import {
    MAIN_ROUTES
} from 'src/shared/mocks/mainRoutes';

/* Util(s) */
import { 
    styleScrollbars 
} from 'src/utils/helper/scrollbar';

/* Stylesheet */
import styles from './Sidemenu.module.scss';

const Sidemenu: React.FC = () => {
    const location = useLocation();
    const ionContentRef: any = useRef();
    const routes: MainRoutesModel[] = MAIN_ROUTES;

    // activeRoute
    const [activeRoute, setActiveRoute] = useState<string>(routes[1].path);

    const handleActiveRoute = () => {
        routes.map((route: MainRoutesModel) => {
            if (route.path.substring(1, route.path.length).split('/')[0] === location.pathname.substring(1, location.pathname.length).split('/')[0]) {
                return setActiveRoute(route.path);
            } else {
                return undefined;
            }
        });
    };

    useEffect(() => {
        handleActiveRoute();
    });

    useEffect(() => {
        styleScrollbars(ionContentRef.current);
    }, []);

    const renderRoutes = routes.map((route: MainRoutesModel) => {
        return (
            <IonButton
                key={route.id}
                style={{
                    '--background': (route.path === activeRoute) ? 'rgba(119,204,218,0.5)' : ''
                }}
                className={styles.btn}
                expand="block"
                routerLink={route.path}>
                <IonIcon
                    className={route.path !== activeRoute ? styles.icon : styles.icon_active}
                    icon={route.icon}
                    slot="start"
                />
                {route.name}
            </IonButton>
        )
    });

    return (
        <IonMenu
            ref={ionContentRef}
            className={styles.sidemenu}
            contentId="main-menu">
            <IonContent
                className={styles.content_container}>
                <div className={styles.wrapper_container}>
                    <IonList className={styles.list_container}>
                        {renderRoutes}
                    </IonList>
                </div>
            </IonContent>
        </IonMenu>
    );
};

export default Sidemenu;