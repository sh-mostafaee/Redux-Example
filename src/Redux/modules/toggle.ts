export const TOGGLE_IS_HELLO = "TOGGLE_IS_HELLO";
export const SET_IS_HELLO = "SET_IS_HELLO";

export const toggleIsHello = () => ({
  type: TOGGLE_IS_HELLO,
});

export const setIsHello = (payload: boolean) => ({
  type: SET_IS_HELLO,
  payload,
});

export const toggleReducer = (state = true, action: any) => {
  if (action.type === TOGGLE_IS_HELLO) {
    return !state;
  }
  if (action.type === SET_IS_HELLO) {
    return action.payload;
  }
  return state;
};
