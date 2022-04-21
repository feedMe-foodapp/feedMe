/* serviceLoader.ts */

/* Service(s) */
import {
    TesseractService
} from 'src/shared/services/tesseract';

const tesseract: TesseractService = new TesseractService();

export class ServiceLoader {

    public static tesseract() {
        return tesseract;
    }
}