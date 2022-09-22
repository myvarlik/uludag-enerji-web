import axios from "axios";

export const fetching = function (options, thenHandler = null, catchHandler = null) {
    const { token, cancel } = axios.CancelToken.source();
    options.cancelToken = token;

    let request = axios(options)
    if (thenHandler)
        request = request.then(thenHandler)
    if (catchHandler)
        request = request.catch(catchHandler)

    request.cancel = cancel;
    return request;
}