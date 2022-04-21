/* React */
import React from 'react';

/* React-Router */
import { 
    Redirect, 
    Route 
  } from 'react-router-dom';

/* Ionic */
import {
    IonRouterOutlet
} from '@ionic/react';

import { 
    IonReactRouter 
} from '@ionic/react-router';

/* Util(s) */
import SplitPaneWrapper from 'src/utils/wrapper/split-pane/SplitPaneWrapper';

/* Component(s) */
import Sidemenu from 'src/components/sidemenu/Sidemenu';

/* Page(s) */
import ReceiptRecognitionPage from 'src/pages/receipt-recognition/ReceiptRecognitionPage';

const MainRouter: React.FC = () => {
    return (
        <SplitPaneWrapper>
            <React.Fragment>
                <Sidemenu />
                <IonReactRouter>
                    <IonRouterOutlet id="main-menu">
                        <Route path="/home">
                            
                        </Route>
                        <Route path="/receipt-recognition">
                            <ReceiptRecognitionPage />
                        </Route>
                        {/* fallback route */}
                        <Route render={() => <Redirect to="/home" />} />
                    </IonRouterOutlet>
                </IonReactRouter>
            </React.Fragment>
        </SplitPaneWrapper>
    );
};

export default MainRouter;