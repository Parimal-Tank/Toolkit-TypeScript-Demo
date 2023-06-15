import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../reducers/cake/CakeSliceReducer";
import icecreamReducer from "../reducers/icecream/IceCreamReducer";
import userReducer from "../reducers/user/UserReducer";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch