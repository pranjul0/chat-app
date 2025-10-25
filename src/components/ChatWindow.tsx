import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import { Send } from 'lucide-react';
import { ChatWindowProps } from '../types';
import './ChatWindow.css';

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, onSendMessage }) => {
  const [messageText, setMessageText] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (messageText.trim()) {
      onSendMessage(chat.id, messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as any);
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="message-input"
            rows={1}
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
