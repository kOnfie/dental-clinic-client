import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IinitStateProps {
  [key: string]: boolean;
}

const initialState: IinitStateProps = {};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: IinitStateProps, action: PayloadAction<string>) => ({
      ...state,
      [action.payload]: true,
    }),
    closeModal: (state: IinitStateProps, action: PayloadAction<string>) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
