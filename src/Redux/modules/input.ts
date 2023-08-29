export const SET_INPUT = "SET_INPUT";

export const setInput = (payload: string) => ({
  type: SET_INPUT,
  payload,
});

const initialState = {
  value: "",
};

export const inputReducer = (state = initialState, action: any) => {
  if (action.type === SET_INPUT) {
    return {
      ...state,
      value: action.payload,
    };
  }
  return state;
};
