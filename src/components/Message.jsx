import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + 
             ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  const getUserDisplayName = (userId) => {
    return userId === 'user' ? 'You' : userId;
  };

  return (
    <div className="message">
      <div className="message-content">
        <div className="message-header">
          <span className="message-user">{getUserDisplayName(message.userId)}</span>
          <span className="message-timestamp">{formatTimestamp(message.timestamp)}</span>
        </div>
        <div className="message-text">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
