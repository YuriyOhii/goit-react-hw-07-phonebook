import { fetchContacts, addContact, deleteContact } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInit = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInit,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleError),
});

export const contactsReducer = contactsSlice.reducer;
