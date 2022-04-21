/* ocrResultModel.ts */

export interface OCRResultModel {
    metaInfo: MetaInfoModel;
    lines: ResultModel[],
    words: ResultModel[]
}

export interface MetaInfoModel {
    confidence: number;
    lines: number;
    words: number;
    symbols: number;
}

export interface BBoxModel {
    x0: number;
    x1: number;
    y0: number;
    y1: number;
}

export interface ResultModel {
    id: number;
    text: string;
    confidence: number;
    bbox: BBoxModel;
}

export const DEFAULT_RESULT: OCRResultModel = {
    metaInfo: {
        lines: 0,
        words: 0,
        symbols: 0,
        confidence: 0
    },
    lines: [],
    words: []
};