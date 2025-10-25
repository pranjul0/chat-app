import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import { Send } from 'lucide-react';
import './ChatWindow.css';

const ChatWindow = ({ chat, onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      onSendMessage(chat.id, messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>{chat.name}</h3>
        <div className="chat-meta">
          {chat.messages.length} message{chat.messages.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      <div className="messages-container">
        {chat.messages.length === 0 ? (
          <div className="empty-chat">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          chat.messages.map(message => (
            <Message key={message.id} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="message-input-form" onSubmit={handleSendMessage}>
        <div className="message-input-container">
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="message-input"
            rows="1"
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!messageText.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
