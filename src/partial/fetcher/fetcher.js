import { clientFetcher } from './clientFetcher';
import { serverFetcher } from './serverFetcher';

export const fetcher = (TheComponent, fetch, stateName) => {
    let Fecher;

    if (import.meta.env.SSR) {
        Fecher = serverFetcher(TheComponent, stateName)
    } else {
        Fecher = clientFetcher(TheComponent, stateName, fetch)
    }

    Object.getOwnPropertyNames(TheComponent).forEach(function (key) {
        if (!Fecher.hasOwnProperty(key) && key !== 'caller' && key !== 'arguments') {
            Fecher[key] = TheComponent[key];
        }
    })

    return Fecher;
}