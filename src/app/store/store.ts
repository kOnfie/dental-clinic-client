import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modal/modalSlice";
import authSlice from "./auth/authSlice";
import servicesSlice from "./services/servicesSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    services: servicesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
