import axios from 'axios';
import { ActionTypes } from './../constants/actionTypes';

export const getAnswer = (prompt) => async (dispatch) => {
  // api çağrısı burada yapılır
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
  };

  const response = await axios.request(options);

  dispatch({
    type: ActionTypes.GET_ANSWER,
    payload: { prompt, answer: response.data.choices[0].message.content },
  });
};

export const getImage = (prompt) => async (dispatch) => {
  // api çağrısı burada yapılır
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/images/generations',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
    },
    data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`,
  };

  const response = await axios.request(options);

  dispatch({
    type: ActionTypes.GET_IMAGE,
    payload: { prompt, answer: response.data },
  });
};

export const getDataStart = () => ({
  type: ActionTypes.GET_DATA_START,
  payload: true,
});

// ÖRNEK1

// export const getImage = () => {};

// export const getAnswer = async () => {
//   const options = {
//     method: 'POST',
//     url: 'https://openai80.p.rapidapi.com/completions',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
//       'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
//     },
//     data: '{"model":"text-davinci-003","prompt":"Say this is a test","max_tokens":7,"temperature":0,"top_p":1,"n":1,"stream":false,"logprobs":null,"stop":""}',
//   };

//   const reponse = await axios.request(options);
//   console.log(reponse);

//   return {
//     type: ActionTypes.GET_ANSWER,
//     payload: response,
//   };
// };

// ÖRNEK 2

// export const actionName = (data) => (dispatch) => {
//   dispatch({
//     type: 'ACTION_TYPE',
//     payload: 'my payload',
//   });
// };
