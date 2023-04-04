import { useState } from "react";

export function useLocalStorage(key, initialData) {
    const [state, setState] = useState(() => {
        const serializedPersistedState = localStorage.getItem(key);

        if(serializedPersistedState){
            const persistedState = JSON.stringify(serializedPersistedState);
            setState(persistedState);
        }

        return initialData;
    });

    function setLocalStorageState(value){
        setState(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [state, setLocalStorageState]

}