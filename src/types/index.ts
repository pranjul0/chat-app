// types/index.ts
export interface Message {
  id: number;
  text: string;
  userId: string;
  timestamp: string;
}

export interface Chat {
  id: number;
  name: string;
  messages: Message[];
  createdAt: string;
}

export interface ChatListProps {
  chats: Chat[];
  activeChatId: number | null;
  onChatSelect: (chatId: number) => void;
  onDeleteChat: (chatId: number) => void;
}

export interface ChatWindowProps {
  chat: Chat;
  onSendMessage: (chatId: number, messageText: string) => void;
}

export interface MessageProps {
  message: Message;
}
