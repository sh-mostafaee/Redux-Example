export const RESET_COUNTER = "RESET_COUNTER";
export const PLUS_COUNTER = "PLUS_COUNTER";
export const MINUS_COUNTER = "MINUS_COUNTER";
export const SET_COUNTER = "SET_COUNTER";

export const plusCounter = () => ({
  type: PLUS_COUNTER,
});

export const minusCounter = () => ({
  type: MINUS_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});

export const setCounter = (payload: number) => ({
  type: SET_COUNTER,
  payload,
});

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
  if (action.type === RESET_COUNTER) {
    return initialState;
  }
  if (action.type === PLUS_COUNTER) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === MINUS_COUNTER) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === SET_COUNTER) {
    return {
      ...state,
      count: action.payload,
    };
  }

  return state;
};
