/* React */
import React from 'react';

/* Stylesheet */
import styles from './ReceiptPreview.module.scss';

/* Component(s) */
import Illustration from 'src/components/shared/illustration/Illustration';

/* Interface(s) */
interface ReceiptPreviewProps {
    receipt: string;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ receipt }) => {
    return (
        <React.Fragment>
            <div className={styles.receipt_preview_container}>
                {receipt ? (
                    <img 
                        className={styles.receipt}
                        src={receipt}
                        alt="Receipt"
                    />
                ) : (
                    <Illustration 
                        icon={'/assets/icon/default_image.svg'}
                        showDots={false}
                        showAnimation={false}
                    />
                )}
            </div>
        </React.Fragment>
    );
};

export default ReceiptPreview;