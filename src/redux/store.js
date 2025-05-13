// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import roleReducer from './roleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    role: roleReducer,
  },
});


