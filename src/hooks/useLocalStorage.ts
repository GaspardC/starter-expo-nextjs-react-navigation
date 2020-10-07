import { useState, useCallback } from 'react'
import { getAsyncStorage, saveToAsynStorage, isJsonString } from '../helpers/utils';
import { useFocusEffect } from 'expo-next-react-navigation'

// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(initialValue);


    useFocusEffect(
        useCallback(() => {
            getAsyncStorage(key).then((val: any) => {
                setStoredValue(isJsonString(val) ? JSON.parse(val) : val);
            }).catch(e => { console.log(e) })
        }, [])
    );

    // useEffect(() => {
    //     try {
    //         getAsyncStorage(key).then((val: any) => {
    //             setStoredValue(isJsonString(val) ? JSON.parse(val) : val);
    //         })
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // }, [])


    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            saveToAsynStorage(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];

}
export default useLocalStorage

