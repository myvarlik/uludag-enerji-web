import { compose, createStore as createStoreProvider } from 'trim-redux';

export const defaultState = {
    home: null,
    questions: null,
    blogList: { kategori: [], blogListe: [], total: 0, success: false, current: 1, pageSize: 10 },
    blogdetail: null,
    productList: null,
    productDetail: null,
    productCategory: null,
}

let composeEnhancer = compose;

export const createStore = (state = { ...defaultState }) => createStoreProvider(state, composeEnhancer);

export const clientCreateStore = function () {
    let states;

    if (window.UPDATED_REDUX_STATES !== undefined) {
        states = {
            ...defaultState,
            ...window.UPDATED_REDUX_STATES
        };
        delete window.UPDATED_REDUX_STATES;
    }

    return createStore(states);
}