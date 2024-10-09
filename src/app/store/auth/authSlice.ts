import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";

import type { UserDataType } from "src/shared/ui/Form/Form";

type FulfilledDataType = {
  login: boolean;
  success: boolean;
  token: string;
  user: {
    fullName: string;
    email: string;
    phone: string;
    __v: number;
    _id: string;
  };
};

type DataType = {
  data: FulfilledDataType | { message: string };
} | null;

interface InitialStateType {
  data: DataType;
  errorMessage: string;
  status: "loading" | "success" | "error";
}



interface FetchUserDataArgs {
  userData: UserDataType;
  type: "login" | "signup";
}

const initialState: InitialStateType = {
  data: null,
  status: "loading",
  errorMessage: "",
};

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async ({ userData, type }: FetchUserDataArgs): Promise<FulfilledDataType> => {
    const response = await fetch(`http://localhost:8000/api/v1/auth/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Data processing error!");
    }

    const dataJson = await response.json();
    localStorage.setItem("token", dataJson.token);

    return dataJson;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<FulfilledDataType>) => {
          state.status = "success";
          state.data = { data: action.payload };
        }
      )
      .addCase(
        fetchUserData.rejected,
        (
          state,
          action: PayloadAction<unknown, string, unknown, SerializedError>
        ) => {
          state.status = "error";
          if (action.error.message) {
            state.errorMessage = action.error.message;
          } else {
            state.errorMessage = "Unknown error occurred.";
          }
        }
      );
  },
});

export default authSlice.reducer;
