import { createStore, applyMiddleware } from 'redux';

export default function store(reducers, middlewares) {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
};