import React, { useState, useEffect } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import { Chat, Message } from './types';
import './App.css';

function App(): JSX.Element {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [nextChatId, setNextChatId] = useState<number>(1);

  // Initialize with a default chat
  useEffect(() => {
    const defaultChat: Chat = {
      id: 1,
      name: 'My Chat',
      messages: [],
      createdAt: new Date().toISOString()
    };
    setChats([defaultChat]);
    setActiveChatId(1);
    setNextChatId(2);
  }, []);

  const createNewChat = (): void => {
    const newChat: Chat = {
      id: nextChatId,
      name: `Chat ${nextChatId}`,
      messages: [],
      createdAt: new Date().toISOString()
    };
    setChats(prev => [...prev, newChat]);
    setActiveChatId(nextChatId);
    setNextChatId(prev => prev + 1);
  };

  const deleteChat = (chatId: number): void => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (activeChatId === chatId) {
      const remainingChats = chats.filter(chat => chat.id !== chatId);
      setActiveChatId(remainingChats.length > 0 ? remainingChats[0].id : null);
    }
  };

  const sendMessage = (chatId: number, messageText: string): void => {
    const newMessage: Message = {
      id: Date.now(),
      text: messageText,
      userId: 'user',
      timestamp: new Date().toISOString()
    };

    setChats(prev => prev.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));
  };

  const activeChat = chats.find(chat => chat.id === activeChatId);

  return (
    <div className="app">
      <div className="app-header">
        <h1>Chat App</h1>
        <button className="new-chat-btn" onClick={createNewChat}>
          + New Chat
        </button>
      </div>
      
      <div className="app-content">
        <ChatList 
          chats={chats}
          activeChatId={activeChatId}
          onChatSelect={setActiveChatId}
          onDeleteChat={deleteChat}
        />
        
        {activeChat ? (
          <ChatWindow 
            chat={activeChat}
            onSendMessage={sendMessage}
          />
        ) : (
          <div className="no-chat-selected">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
