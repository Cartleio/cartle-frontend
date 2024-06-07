import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth-slice";
import storeCreationReducer from "./feature/storeCreationSlice";
import merchantDataReducer from "./feature/storeSlice";
import productsReducer from "./feature/productSlice";
import settingsControlReducer from "./feature/settingsSlice";
import profileReducer from "./feature/profileSlice";
import subscriptionReducer from "./feature/subscriptionSlice";
import vouchersReducer from "./feature/voucherSlice";
import overlayReducer from "./feature/overlay-slice";
import customerReducer from "./feature/customersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    storeCreation: storeCreationReducer,
    storeProduct: productsReducer,
    merchantData: merchantDataReducer,
    settings: settingsControlReducer,
    profile: profileReducer,
    subscription: subscriptionReducer,
    vouchers: vouchersReducer,
    overlay: overlayReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
