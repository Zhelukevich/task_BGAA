import { configureStore } from '@reduxjs/toolkit';

import apiSubjectReducer from './slice/apiSubjectSlice';
import sendDataSubjectReducer from './slice/SendDataSubjectSlice';

export const store = configureStore({
  reducer: {
    apiSubject: apiSubjectReducer,
    sendDataSubject: sendDataSubjectReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
