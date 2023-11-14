// src/App.jsx
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Chat() {
  const messagesListRef = useRef(null);
  const formChatRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    scrollMessagesToBottom();
  }, [messages]);

  const scrollMessagesToBottom = () => {
    messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
  };

  const addMessage = (event) => {
    event.preventDefault();

    const messageInput = formChatRef.current.querySelector('#message');
    const messageValue = messageInput.value.trim();

    if (messageValue === '') {
      alert('Informe uma mensagem válida antes de enviar');
      return;
    }

    const newMessage = {
      user: 'Você',
      text: messageValue,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    formChatRef.current.reset();
  };

  return (
    <div id="chat-screen">
      <header>
        <h2>Atendimento on-line</h2>
      </header>
      <div className="messages-list" ref={messagesListRef}>
        {messages.map((message, index) => (
          <div className={`message-item ${message.user === 'Você' ? 'message-user' : ''}`} key={index}>
            <div className="msg-user">
              <strong>{message.user} diz:</strong>
            </div>
            <div className="msg-chat">{message.text}</div>
          </div>
        ))}
      </div>
      <form id="form-chat-send" ref={formChatRef} onSubmit={addMessage}>
        <input type="text" id="message" name="message" placeholder="Digite sua mensagem..." />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Chat;
