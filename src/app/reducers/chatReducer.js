import { ActionTypes } from '../constants/actionTypes';
import ChatAI from './../../components/chat';

const initialState = {
  chatAi: [],
  imageAi: [],
  isLoading: false,
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ANSWER:
      return {
        ...state,
        chatAi: [...state.chatAi, payload],
        isLoading: false,
      };
    case ActionTypes.GET_IMAGE:
      return {
        ...state,
        imageAi: [...state.imageAi, payload],
        isLoading: false,
      };
    case ActionTypes.GET_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
