import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  data: any;
  errorMessage: string;
  status: 'loading' | 'success' | 'error';
}

interface ErrorPayload {
  error: string;
}

interface FetchUserDataArgs {
  userData: { [key: string]: FormDataEntryValue };
  type: 'login' | 'signup';
}

const initialState: InitialStateType = {
  data: null,
  status: 'loading',
  errorMessage: '',
};

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async ({ userData, type }: FetchUserDataArgs) => {
    const data: any = await fetch(`http://localhost:8000/api/v1/auth/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!data.ok) {
      const errorData = await data.json();
      throw new Error(errorData.message || 'Data processing error!');
    }

    const dataJson = await data.json();
    localStorage.setItem('token', dataJson.token);

    return dataJson;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action: PayloadAction<ErrorPayload>) => {
        state.status = 'error';
        state.errorMessage = action.error.message;
      });
  },
});

export default authSlice.reducer;
