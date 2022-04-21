/* ocrResult.ts */

/* Model(s) */
import { 
    OCRResultModel
} from 'src/shared/models/ocrResult';

export const validResultLength = (result: OCRResultModel) => {
    if(result.lines.length === 0) {
        return true;
    } else {
        return false;
    };
};

export const createResultObject = (result: any) => {
    const tmpOCRResult: OCRResultModel = {
        metaInfo: {
            confidence: result.confidence,
            lines: result.lines.length,
            words: result.words.length,
            symbols: result.symbols.length
        },
        lines: [],
        words: []
    };

    // eslint-disable-next-line array-callback-return
    result.lines.map((line: any, index: number) => {
        tmpOCRResult.lines.push({
            id: index,
            confidence: line.confidence,
            text: line.text,
            bbox: line.bbox
        })
    })

    // eslint-disable-next-line array-callback-return
    result.words.map((word: any, index: number) => {
        tmpOCRResult.words.push({
            id: index,
            confidence: word.confidence,
            text: word.text,
            bbox: word.bbox
        })
    })

    return tmpOCRResult;
}