import React from 'react';
import { MessageCircle, Trash2 } from 'lucide-react';
import './ChatList.css';

const ChatList = ({ chats, activeChatId, onChatSelect, onDeleteChat }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getLastMessagePreview = (chat) => {
    if (chat.messages.length === 0) {
      return 'No messages yet';
    }
    const lastMessage = chat.messages[chat.messages.length - 1];
    return lastMessage.text.length > 30 
      ? lastMessage.text.substring(0, 30) + '...'
      : lastMessage.text;
  };

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>Chats</h2>
      </div>
      
      <div className="chat-items">
        {chats.map(chat => (
          <div 
            key={chat.id}
            className={`chat-item ${activeChatId === chat.id ? 'active' : ''}`}
            onClick={() => onChatSelect(chat.id)}
          >
            <div className="chat-item-content">
              <div className="chat-icon">
                <MessageCircle size={20} />
              </div>
              
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-preview">{getLastMessagePreview(chat)}</div>
                <div className="chat-time">{formatTime(chat.createdAt)}</div>
              </div>
            </div>
            
            <button 
              className="delete-chat-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(chat.id);
              }}
              title="Delete chat"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
