import React from 'react';
import { useStore } from './store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Text from '../../Text/index';

export default function ReduxPersist({ children, pageProps }: { children, pageProps?}) {
    const store = useStore(pageProps?.initialReduxState)
    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}