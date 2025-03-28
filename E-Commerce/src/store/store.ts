import { configureStore } from "@reduxjs/toolkit";
import catRdc from "./categories/categoriesSlice";
import prodRdc from "./products/productsSlice";

export const store = configureStore({
  reducer: { catRdc, prodRdc },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
