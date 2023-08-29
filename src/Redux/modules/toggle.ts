export const TOGGLE_IS_HELLO = "TOGGLE_IS_HELLO";
export const SET_IS_HELLO = "SET_IS_HELLO";

export const toggleIsHello = () => ({
  type: TOGGLE_IS_HELLO,
});

export const setIsHello = (payload: boolean) => ({
  type: SET_IS_HELLO,
  payload,
});

const initialState = {
  value: true,
};

export const toggleReducer = (state = initialState, action: any) => {
  if (action.type === TOGGLE_IS_HELLO) {
    return {
      ...state,
      value: !state.value,
    };
  }
  if (action.type === SET_IS_HELLO) {
    return {
      ...state,
      value: action.payload,
    };
  }
  return state;
};
