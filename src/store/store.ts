import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/navSlice';
import infoReducer from './features/infoSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            nav: navReducer,
            info: infoReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
