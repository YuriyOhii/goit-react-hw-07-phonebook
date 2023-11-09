const { createSlice } = require('@reduxjs/toolkit');

const filterInit = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
