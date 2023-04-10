import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer, getDataStart } from './../app/actions/chatActions';

const ChatAI = () => {
  const state = useSelector((state) => state.chatState);
  const [prompt, setPrompt] = useState('');
  const dispatch = useDispatch();

  console.log(state);
  //   input değişitğinde çalışır
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  //   butona tıklandığında çalışır
  const handleSubmit = () => {
    dispatch(getDataStart());
    dispatch(getAnswer(prompt));
  };
  return (
    <div className="chat">
      <div className="list">
        {state.chatAi.map((message, i) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <p className="answer">{message.answer}</p>
          </>
        ))}
        {state.isLoading && <p>LOADING...</p>}
      </div>
      <div className="form">
        <input className="promptInput" onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};

export default ChatAI;
