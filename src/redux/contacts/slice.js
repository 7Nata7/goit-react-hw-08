// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
//   editContact,
// } from "./operations";

// const handlePending = (state) => {
//   state.loading = true;
// };

// const handleReject = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//     currentContact: null,
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleReject)

//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         console.log(action.payload);
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleReject)

//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         console.log(action.payload);

//         state.loading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (contact) => contact._id === action.payload._id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleReject)

//       .addCase(editContact.pending, handlePending)
//       .addCase(editContact.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.error = null;
//         const index = state.items.findIndex(({ id }) => id === payload.id);
//         state.items.splice(index, 1, payload);
//       })
//       .addCase(editContact.rejected, handleReject);
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex((contact) => contact.id === action.payload.id);
        state.items[index] = action.payload;
      });
  },
});

export default contactsSlice.reducer;
