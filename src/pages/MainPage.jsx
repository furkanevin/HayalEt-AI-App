import React, { useState } from 'react';
import ChatAI from '../components/chat';
import ImageAI from '../components/image';

const MainPage = () => {
  //   stateler

  const [isChatMode, setIsChatMode] = useState(false);

  //   sayfa değiştiğinde
  function handleToggleMode() {
    setIsChatMode(!isChatMode);
  }

  return (
    <div className="chat-bot">
      <h1>Hayal Et</h1>
      <button onClick={handleToggleMode}>
        {isChatMode ? 'Bir şey Sor' : 'Resim iste'}
      </button>
      {isChatMode ? <ChatAI /> : <ImageAI />}
    </div>
  );
};

export default MainPage;
