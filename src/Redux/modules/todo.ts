const initialState = {
  names: [],
  addInput: "",
  searchInput: "",
  error: "",
};

export const SET_SEARCH_INPUT_VALUE = "SET_SEARCH_INPUT_VALUE";
export const SET_ADD_INPUT_VALUE = "SET_ADD_INPUT_VALUE";
export const ADD_NAME = "ADD_NAME";
export const SET_ERROR = "SET_ERROR";
export const GENERATE_NAMES = "GENERATE_NAMES";
export const RESET_NAMES = "RESET_NAMES";
export const DELETE_NAME = "DELETE_NAME";
export const EDIT_NAME = "EDIT_NAME";
export const SET_EDIT_ERROR = "SET_EDIT_ERROR";

export const setSearchInputValue = (payload: string) => ({
  type: SET_SEARCH_INPUT_VALUE,
  payload,
});

export const setAddInputValue = (payload: string) => ({
  type: SET_ADD_INPUT_VALUE,
  payload,
});

export const addName = (payload: string) => ({
  type: ADD_NAME,
  payload,
});
export const setError = (payload: string) => ({
  type: SET_ERROR,
  payload,
});

export const generateNames = () => ({
  type: GENERATE_NAMES,
});
export const resetNames = () => ({
  type: RESET_NAMES,
});
export const deleteName = (payload: string) => ({
  type: DELETE_NAME,
  payload,
});
export const editName = (id: string, newName: string) => ({
  type: EDIT_NAME,
  id,
  newName,
});
export const setEditError = (id: string, error: string) => ({
  type: SET_EDIT_ERROR,
  id,
  error,
});

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_ADD_INPUT_VALUE:
      return {
        ...state,
        addInput: action.payload,
      };
    case ADD_NAME:
      return {
        ...state,
        names: [
          ...state.names,
          {
            value: action.payload,
            error: "",
          },
        ],
        addInput: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GENERATE_NAMES:
      return {
        ...state,
        names: [
          ...state.names,
          { value: "hamed", error: "" },

          { value: "esshak", error: "" },
          { value: "shivajonam", error: "" },
          { value: "zeinab", error: "" },
          { value: "zeinab", error: "" },
          { value: "maryam", error: "" },
          { value: "amirbiasa", error: "" },
          { value: "nimajonam", error: "" },
          { value: "adele joniiiiiiii", error: "" },
          { value: "saied joniiiiiiii", error: "" },
        ],
      };
    case RESET_NAMES:
      return {
        ...state,
        names: [],
      };
    case DELETE_NAME:
      return {
        ...state,
        names: state.names.filter((name) => action.payload !== name),
      };
    case EDIT_NAME:
      return {
        ...state,
        names: state.names.map((name: any) => {
          if (name.value === action.id) {
            return {
              ...name,
              value: action.newName,
            };
          }
          return name;
        }),
      };
    case SET_EDIT_ERROR:
      return {
        ...state,
        names: state.names.map((name: any) => {
          if (name.value === action.id) {
            return {
              ...name,
              error: action.error,
            };
          }
          return name;
        }),
      };
    default:
      return state;
  }
};
