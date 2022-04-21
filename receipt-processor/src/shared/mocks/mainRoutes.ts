/* mainRoute.ts */

/* Ionic */
import {
    homeOutline
} from 'ionicons/icons';

export default interface MainRoutesModel {
    id: number;
    name: string;
    icon: string;
    path: string;
}

export const MAIN_ROUTES: MainRoutesModel[] = [
    {
        id: 0,
        name: 'Home',
        icon: homeOutline,
        path: '/home'
    },
    {
        id: 1,
        name: 'Receipt-Processor',
        icon: '/assets/icon/recognition.svg',
        path: '/receipt-processor'
    }
];