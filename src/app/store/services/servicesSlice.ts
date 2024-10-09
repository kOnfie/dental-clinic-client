import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";

type ApiResponse = {
  services: Service[];
};

type Card = {
  cardDescription: string[];
  cardImage: string;
};

type Service = {
  _id: string;
  service: string;
  description: string;
  card: Card;
  path: string;
};

type InitialStateTypes = {
  data: Service[];
  status: string;
  errorMessage: string;
};

const initialState: InitialStateTypes = {
  data: [],
  status: "loading",
  errorMessage: "",
};

export const getServices = createAsyncThunk(
  "services",
  async (): Promise<ApiResponse> => {
    const response = await fetch("http://localhost:8000/api/v1/services");

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Data processing error!");
    }

    const { data } = await response.json();

    return data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
    getServices.fulfilled,
        (state, action: PayloadAction<ApiResponse>) => {
          state.data = action.payload.services;
          state.status = "success";
        }
      )
      .addCase(
        getServices.rejected,
        (
          state,
          action: PayloadAction<unknown, string, unknown, SerializedError>
        ) => {
          state.status = "error";
          if (action.error.message) {
            state.errorMessage = action.error.message + ", try again!";
          } else {
            state.errorMessage = "Failed to fetch, try again!";
          }
        }
      );
  },
});

export default servicesSlice.reducer;
