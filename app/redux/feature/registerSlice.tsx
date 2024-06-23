import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  email: string;
  password: string;
  firstName: string;
  lastName:string;
  storeName: string;
  storeAddress: string;
  phoneNumber: number | string;
  whatDoYouWantToSell: string[];
  howWillYouGetTheGoods: string[];
};

type StateKeys = keyof typeof initialState;

interface UpdateFieldAction {
  payload: {
    field: StateKeys;
    value: string;
  };
}

const getRegistrationStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const stateString = localStorage.getItem("registrationState");
    return stateString ? JSON.parse(stateString) : null;
  }
  return null;
};

const initialState: InitialState = getRegistrationStateFromLocalStorage() || {
  email: "",
  password: "",
  lastName:"",
  firstName: "",
  storeName: "",
  storeAddress: "",
  phoneNumber: "",
  whatDoYouWantToSell: [],
  howWillYouGetTheGoods: [],
};

const saveRegistrationStateToLocalStorage = (state: InitialState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("registrationState", JSON.stringify(state));
  }
};

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    updateField: (state: typeof initialState, action: UpdateFieldAction) => {
      const { field, value } = action.payload;
      if (
        field === "whatDoYouWantToSell" ||
        field === "howWillYouGetTheGoods"
      ) {
        state[field].push(value);
      } else {
        state[field] = value;
      }
      saveRegistrationStateToLocalStorage(state);
    },
    removeArrayField: (
      state: typeof initialState,
      action: UpdateFieldAction
    ) => {
      const { field, value } = action.payload;
      const newArray = (state[field] as string[]).filter(
        (item) => item !== value
      );
      (state[field] as string[]) = newArray;
      saveRegistrationStateToLocalStorage(state);
    },
  },
});

export const { updateField, removeArrayField } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;
