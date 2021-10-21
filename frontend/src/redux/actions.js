import axios from "axios";

import Types from "./types";

export const getMessages = () => {
  return (dispatch) => {
    dispatch({ type: Types.MESSAGES_LOADING, payload: true });
    axios
      .get(`${process.env.REACT_APP_API_HOST}/api/messages/`)
      .then((response) => {
        dispatch({ type: Types.GET_MESSAGES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Types.MESSAGES_LOADING, payload: false });
      });
  };
};

export const deleteMessage = (id, cb) => {
  return (dispatch) => {
    dispatch({ type: Types.MESSAGES_LOADING, payload: true });
    axios
      .delete(`${process.env.REACT_APP_API_HOST}/api/messages/${id}/`)
      .then((response) => {
        dispatch({ type: Types.DELETE_MESSAGE, payload: id });
        cb();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createMessage = (data, cb) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_HOST}/api/messages/`, data)
      .then((response) => {
        console.log("Message created!");
        console.log(response);
        dispatch({ type: Types.CREATE_MESSAGE, payload: response.data });
        cb();
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Types.MESSAGES_LOADING, payload: false });
      });
  };
};
