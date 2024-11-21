import { getAnalytics, logEvent } from 'firebase/analytics';

export default function useAnalytics() {
    const analytics = getAnalytics();

    const logCustomEvent = (eventName: string, eventParams: object) => {
        try {
            logEvent(analytics, eventName, eventParams);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Erro ao registrar evento no Analytics: ${error.message}`);
            }
            throw new Error('Erro desconhecido ao registrar evento no Analytics');
        }
    };

    return {
        logCustomEvent
    };
}