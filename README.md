# Chat App - Frontend Take-Home Assignment

A modern chat interface application built with React and Vite, similar to MS Teams, Slack, or WhatsApp. This application allows users to create multiple chats, send messages, and manage conversations with a clean and intuitive user interface.

## 🚀 Features

- **Create Multiple Chats**: Start new conversations with the "New Chat" button
- **Send Messages**: Type and send messages with Enter key or Send button
- **Message Display**: Each message shows user identifier, timestamp, and content
- **Delete Chats**: Remove unwanted conversations with the delete button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time UI Updates**: Messages appear instantly when sent
- **Auto-scroll**: Automatically scrolls to the latest message

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern design patterns
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Design Decisions

### Architecture
- **Component-based Architecture**: Modular components for maintainability
- **Single Page Application**: Smooth user experience without page reloads
- **State Management**: Local state using React hooks for simplicity

### UI/UX Design
- **Modern Interface**: Clean, professional design inspired by popular chat apps
- **Responsive Layout**: Mobile-first approach with responsive breakpoints
- **Intuitive Navigation**: Clear visual hierarchy and user-friendly interactions
- **Accessibility**: Proper focus management and keyboard navigation

### Component Structure
```
src/
├── components/
│   ├── ChatList.jsx      # Sidebar with chat list
│   ├── ChatWindow.jsx    # Main chat interface
│   ├── Message.jsx       # Individual message component
│   └── *.css            # Component-specific styles
├── App.jsx              # Main application component
├── App.css              # Global application styles
└── index.css            # Base styles and resets
```

### Key Features Implementation
- **Message Component**: Includes user ID, timestamp, and content as required
- **Chat Management**: Create, send messages, and delete functionality
- **Extensible Design**: Easy to add features like group chats, channels, or user authentication

## 🔮 Future Extensibility

The application is designed with extensibility in mind:

### Group Chats & Channels
- Current chat structure can easily support multiple users
- Add user management and permissions
- Implement channel categories and organization

### Real-time Features
- WebSocket integration for live messaging
- Online/offline status indicators
- Typing indicators

### Advanced Features
- File sharing and media messages
- Message reactions and replies
- Search functionality
- Message history persistence

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the `index.html` for all routes

## 🧪 Testing

The application can be tested by:
1. Creating new chats using the "New Chat" button
2. Sending messages and verifying they appear
3. Testing the delete functionality
4. Checking responsive behavior on different screen sizes

## 📝 Notes

- **No Backend Required**: All data is stored in local state
- **Data Persistence**: Chat data resets on page reload (as specified)
- **Browser Compatibility**: Works on all modern browsers
- **Performance**: Optimized for smooth user experience

## 🤝 Contributing

This is a take-home assignment project. For production use, consider adding:
- Unit tests
- Error boundaries
- Loading states
- Offline support
- Data persistence

## 📄 License

This project is created for educational and assessment purposes.