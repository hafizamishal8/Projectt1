import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'role',
  initialState: {
    value: null, // null, 'vendor', 'rider'
  },
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
    clearRole: (state) => {
      state.value = null;
    },
  },
});

export const { setRole, clearRole } = roleSlice.actions;
export default roleSlice.reducer;
