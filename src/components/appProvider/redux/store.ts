import { useMemo } from 'react'
import { createStore, applyMiddleware, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from './storage/storage'
import reducers from './reducers'
let store

const persistConfig = {
    key: 'primary',
    storage,
    // whitelist: ['exampleData'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, reducers)

function makeStore(initialState: any) {
    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const _store = useMemo(() => initializeStore(initialState), [initialState])
    return _store
}