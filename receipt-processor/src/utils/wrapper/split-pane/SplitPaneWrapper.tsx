/* React */
import React from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

import {
    RootState
} from 'src/redux/store';

/* Ionic */
import {
    IonSplitPane
} from '@ionic/react';

/* Interface(s) */
interface SplitPaneWrapperProps {
    children: React.ReactNode;
}

const SplitPaneWrapper: React.FC<SplitPaneWrapperProps> = ({ children }) => {
    const splitePaneState = useSelector((state: RootState) => state.keyValue);

    return (
        <React.Fragment>
            {splitePaneState.splitPane ? (
                <IonSplitPane contentId="main-menu">
                    {children}
                </IonSplitPane> 
            ) : (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default SplitPaneWrapper;