import React, { Component } from 'react';
import { connect, setStore } from "trim-redux";

import axios from "axios";
import { convertErrorToResponse } from "../../setup/utility/convertErrorToResponse";
import { defaultState } from "../../setup/store";
import { parse } from "querystringify";
import { responseValidation } from "../../setup/utility/responseValidation";

export const clientFetcher = function (TheComponent, stateName, fetch) {
    class Fecher extends Component {
        constructor(props) {
            super(props);

            this.setParams();
            if (this.needFetch())
                this.fetchProvider()
            else
                this.debugLog(false)
        }

        needFetch() {
            let needFetch = false;
            try {
                needFetch = JSON.stringify(this.props[stateName]) === JSON.stringify(defaultState[stateName])
            } catch (err) {
                console.error('⚠ data is not valid.', err);
            }
            return needFetch
        }

        // params passed to fetch() on the client
        setParams() {
            this.ftechParams = {
                match: this.props.match,
                query: parse(window.location.search)
            }

            return true;
        }

        // fetch data and insert to 'stateName'
        fetchProvider() {
            this.debugLog(true);

            const request = fetch(this.ftechParams);

            this.cancelRequest = request.cancel;

            request.then((response) => {
                responseValidation(response);
                setStore(stateName, response.data);
            })
                .catch(function (err) {
                    // ignore canceled request
                    if (axios.isCancel(err))
                        return;

                    const response = convertErrorToResponse(err);
                    setStore(stateName, response.data);
                })
                .then(() => {
                    delete this.cancelRequest;
                })
        }

        // log fetch type in development environment
        debugLog(inClient) {
            //console.info((inClient ? '🙎‍♂️' : '🌎') + ' fetch ' + this.props.match.url + ' in ' + (inClient ? 'client' : 'server'));
        }

        resetDataHolder() {
            const defaultValue = defaultState[stateName];
            setStore(stateName, defaultValue);

            // when try to fetch but the last equal fetch was not completed
            if (this.cancelRequest) {
                this.cancelRequest();
                delete this.cancelRequest;
            }
        }

        shouldComponentUpdate(nextProps, nextState) {
            return this.setParams()
        }

        //  update when route updates. For example click on '/post/2' in mounted component with path '/post/1'
        //  needFetch() needs switching between 2 route paths with equal component
        componentDidUpdate(prevProps) {
            if (this.props.location.key === prevProps.location.key && !this.needFetch())
                return;
            // update match
            this.ftechParams.match = this.props.match;

            // to show loading
            this.resetDataHolder();

            // get data of new route
            this.fetchProvider();
        }

        // then clear state to refetching data on next mounting
        componentWillUnmount() {
            this.resetDataHolder();
        }

        render() {
            const data = this.props[stateName];
            // if (isErrorData(data))
            //     return <></>; //! Hata sayfası yap
            return <TheComponent {...this.props} />;
        }
    }

    return connect(s => ({ [stateName]: s[stateName] }))(Fecher);
}
