
import { matchPath } from 'react-router-dom'
import { routeMap } from '../src/setup/routeMap'

export const initialize = (DUCT) => {
    DUCT.updatedState = {}

    const matchedRouteMapItem = routeMap.find(route => {
        const match = matchPath(DUCT.req.originalUrl, route);

        if (match)
            DUCT.match = match

        return match;
    });


    if (matchedRouteMapItem === undefined) {
        return;
    }

    if (matchedRouteMapItem === undefined)
        throw new Error('⛔ can not match to any route map item! define "*" path for not matched routes to be able to handle e-404, page not found errors.');

    const hasComponent = matchedRouteMapItem.hasOwnProperty('component')
    const hasFetch = hasComponent && matchedRouteMapItem.hasOwnProperty('fetch')
    const hasStateName = hasComponent && matchedRouteMapItem.hasOwnProperty('stateName')

    if (hasFetch) {
        if (!hasStateName)
            throw new Error('⛔ component does not "stateName" param. when define fetch() for component, you must define "stateName" param.');
        DUCT.fetch = matchedRouteMapItem.fetch
        DUCT.stateName = matchedRouteMapItem.stateName
    } else if (hasStateName) {
        throw new Error('⛔ component does not fetch() param. when define "stateName" for component, you must define fetch() param.');
    }

    const status = matchedRouteMapItem.status !== undefined ? matchedRouteMapItem.status : 200;

    if (typeof status !== 'number')
        throw new Error('⛔ status of routeMap is NOT number. status must be number like 404. status is ' + status);

    DUCT.status = status
}