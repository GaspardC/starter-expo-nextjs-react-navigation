import React, { useState } from 'react'

import {
    RecoilRoot,
    useRecoilTransactionObserver_UNSTABLE
} from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';
import STORAGE_KEYS from '../../../config/StorageKeys'
import { isBrowser, isJsonString, isServerSide } from '../../../helpers/utils';
import atoms from './atoms';


const RecoilAutoPersist = () => {

    useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
        //@ts-ignore
        for (const modifiedAtom of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            const atomLoadable = snapshot.getLoadable(modifiedAtom);
            if (atomLoadable.state === 'hasValue') {
                AsyncStorage.setItem(
                    modifiedAtom.key,
                    JSON.stringify({ value: atomLoadable.contents }),
                );
            }
        }
    });
    return <></>
}


const RecoilContainer = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const initializeState = ({ set }) => {
        const isServer = isServerSide()
        if (isServer || !loading) return;
        Promise.all(Object.entries(STORAGE_KEYS.atoms).map(async ([, storageKey]) => {
            const value = await AsyncStorage.getItem(storageKey);
            if (value && isJsonString(value)) set(atoms[storageKey], JSON.parse(value).value);
        })).finally(() => {
            setLoading(false)
        })
    }
    return <RecoilRoot initializeState={initializeState}>
        <RecoilAutoPersist />
        {!loading ? children : null}

    </RecoilRoot>


}

export default RecoilContainer;

