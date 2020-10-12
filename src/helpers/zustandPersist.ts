// import { GetState, SetState, State, StateCreator, StoreApi } from "zustand";
// import SyncStorage from 'sync-storage';

// const isRunningInBrowser = () => typeof window !== "undefined";

// const persist = <T>(name: string, config: StateCreator<T>) => (
//     set: SetState<T>,
//     get: GetState<T>,
//     api: StoreApi<T>,
// ): T => {
//     const state = config(
//         (payload) => {
//             console.log('setting payload  for ' + name, JSON.stringify(payload))
//             set(payload);
//             if (isRunningInBrowser()) {
//                 SyncStorage.set(name, JSON.stringify(payload));
//             }
//         },
//         get,
//         api,
//     );
//     return {
//         ...state,
//         ...(isRunningInBrowser() && SyncStorage.get(name) != null && JSON.parse(SyncStorage.get(name))),
//     };
// };

// export default persist