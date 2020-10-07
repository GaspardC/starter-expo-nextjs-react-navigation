import { GetState, SetState, State, StateCreator, StoreApi } from "zustand";

const isRunningInBrowser = () => typeof window !== "undefined";

const persist = <T>(name: string, config: StateCreator<T>) => (
    set: SetState<T>,
    get: GetState<T>,
    api: StoreApi<T>,
): T => {
    const state = config(
        (payload) => {
            set(payload);
            if (isRunningInBrowser) {
                localStorage.setItem(name, JSON.stringify(payload));
            }
        },
        get,
        api,
    );
    return {
        ...state,
        ...(isRunningInBrowser() && JSON.parse(localStorage.getItem(name))),
    };
};

export default persist