/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Model(s) */
import {
    DotModel
} from 'src/shared/models/dot';

/* Mock(s) */
import {
    DOTS
} from 'src/shared/mocks/dot';

/* Stylesheet */
import styles from './Illustration.module.scss';

/* Interface(s) */
interface IllustrationProps {
    icon: string;
    label?: string;
    showDots: boolean;
    showAnimation: boolean;
}

const Illustration: React.FC<IllustrationProps> = ({
    icon,
    label,
    showDots,
    showAnimation
}) => {

    const dots: DotModel[] = DOTS;

    const renderDots = dots.map((dot: DotModel) => {
        return (
            <IonIcon
                key={dot.id}
                className={`${styles[dot.commonClass]} ${styles[dot.individualClass]}`}
                icon={dot.icon}
            />
        );
    });

    return (
        <div className={styles.illustration_container}>
            <div className={styles.block_container}>
                <IonIcon
                    className={showAnimation ? `${styles.icon} ${styles.icon_animated}` : `${styles.icon}`}
                    icon={icon}
                />
                <div className={styles.label}>
                    {label}
                    {showDots && (
                        <div className={styles.dot_container}>
                            {renderDots}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Illustration;