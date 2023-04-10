import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataStart, getImage } from '../app/actions/chatActions';

const ImageAI = () => {
  const state = useSelector((state) => state.chatState);
  const [prompt, setPrompt] = useState('');
  const dispatch = useDispatch();
  //   input değişitğinde çalışır
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  //   butona tıklandığında çalışır
  const handleSubmit = () => {
    dispatch(getDataStart());
    dispatch(getImage(prompt));
  };

  return (
    <div className="chat">
      <div className="list">
        {state.imageAi.map((message, i) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <img
              src={message.answer.data[0].url}
              className="answer image-answer"
            />
            <img
              src={message.answer.data[1].url}
              className="answer image-answer"
            />
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

export default ImageAI;
