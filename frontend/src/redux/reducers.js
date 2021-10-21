import Types from "./types";

const initialState = {
  messages: [],
  loading: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.MESSAGES_LOADING: {
      return { ...state, loading: action.payload };
    }

    case Types.GET_MESSAGES: {
      return { ...state, messages: action.payload };
    }

    case Types.DELETE_MESSAGE: {
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
